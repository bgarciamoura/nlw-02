// eslint-disable-next-line no-unused-vars
import Knex from 'knex';

export async function up(knex: Knex) {
	// O parâmetro 'table' que a ArrowFunction recebe é a tabela que acabou de ser criada
	return knex.schema.createTable('connections', table => {
		table.increments('id').primary();
		// FK
		table.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		table.timestamp('created_at')
			.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
			.notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('connections');
}
