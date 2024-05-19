const knex = require('knex')(require('./knexfile').development);

knex.raw('SELECT 1')
  .then(() => {
    console.log('Knex is connected to the database');
    process.exit(0);
  })
  .catch(err => {
    console.error('Knex failed to connect to the database:', err);
    process.exit(1);
  });
