/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('finances').del();
  
    // Inserts seed entries
    await knex('finances').insert([
      {
        id: 'some-uuid-1',
        userId: 'user-id-1',
        amount: 1000.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'some-uuid-2',
        userId: 'user-id-2',
        amount: 2000.00,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  };
  
