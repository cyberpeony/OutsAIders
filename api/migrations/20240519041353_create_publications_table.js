exports.up = function(knex) {
    return knex.schema.createTable('Publications', function(table) {
      table.uuid('id').primary();
      table.uuid('userId').references('id').inTable('User').onDelete('CASCADE');
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('publicationType').notNullable();
      table.date('publicationDate').notNullable();
      table.integer('price').notNullable();
      table.string('location').notNullable();
      table.string('state').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Publications');
  };
  