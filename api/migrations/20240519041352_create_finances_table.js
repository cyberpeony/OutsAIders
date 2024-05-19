exports.up = function(knex) {
    return knex.schema.createTable('Finances', function(table) {
      table.uuid('id').primary();
      table.uuid('userId').references('id').inTable('User').onDelete('CASCADE');
      table.integer('amount').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Finances');
  };
  