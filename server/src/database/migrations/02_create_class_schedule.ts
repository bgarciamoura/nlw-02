// eslint-disable-next-line no-unused-vars
import Knex from 'knex';

export async function up(knex: Knex) {
	// O parâmetro 'table' que a ArrowFunction recebe é a tabela que acabou de ser criada
	return knex.schema.createTable('class_schedule', table => {
		table.increments('id').primary();
		// FK
		table.integer('class_id')
			.notNullable()
			.references('id')
			.inTable('classes')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		table.integer('week_day').notNullable();
		table.integer('from').notNullable();
		table.integer('to').notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('class_schedule');
}
