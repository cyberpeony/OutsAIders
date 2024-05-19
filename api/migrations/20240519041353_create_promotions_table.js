exports.up = function(knex) {
    return knex.schema.createTable('Promotions', function(table) {
      table.uuid('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.date('startDate').notNullable();
      table.date('endDate').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Promotions');
  };
  