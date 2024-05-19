exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('User').del();
  
    // Inserts seed entries
    await knex('User').insert([
      {
        id: 'some-uuid-1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashedpassword1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'some-uuid-2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashedpassword2',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  };
  