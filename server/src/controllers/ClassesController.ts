import { Request, Response } from "express";
import convertHourToMinutes from "../utils/convertHourToMinutes";
import db from "../database/connection";


interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}

export default class ClassesController {

	async index(request: Request, response: Response) {

		const filters = request.query;
		const week_day = filters.week_day as string;
		const subject = filters.subject as string;
		const time = filters.time as string;

		if (!week_day || !subject || !time) {
			return response.status(400).json({
				error: 'Missing filters to search classes'
			})
		}

		const timeInMinutes = convertHourToMinutes(time);
		const classes = await db('classes')
			// SUBQUERY
			.whereExists(function () {
				this.select('class_schedule.*')
					.from('class_schedule')
					.whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
					.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
					.whereRaw('`class_schedule`.`from` <= ??', [Number(timeInMinutes)])
					.whereRaw('`class_schedule`.`to` > ??', [Number(timeInMinutes)])
			})
			.where('classes.subject', '=', subject)
			.join('users', 'classes.user_id', '=', 'users.id')
			.select(['classes.*', 'users.*']);

		response.json([classes, timeInMinutes]);
	}

	async create(request: Request, response: Response) {
		const {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			schedule
		} = request.body;

		// START TRANSACTION
		const trx = await db.transaction();

		try {
			const insertedUsersIds = await trx('users').insert({
				name,
				avatar,
				whatsapp,
				bio
			});

			const user_id = insertedUsersIds[0];

			const insertedClassesIds = await trx('classes').insert({
				user_id,
				subject,
				cost
			});

			const class_id = insertedUsersIds[0];

			const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
				return {
					class_id,
					week_day: scheduleItem.week_day,
					from: convertHourToMinutes(scheduleItem.from),
					to: convertHourToMinutes(scheduleItem.to)
				}
			});

			await trx('class_schedule').insert(classSchedule);

			await trx.commit();

			return response.status(201).send();
		} catch (err) {
			await trx.rollback();

			return response.status(400).json({
				error: 'Unexpected error while creating a new class'
			});
		}
	}
}