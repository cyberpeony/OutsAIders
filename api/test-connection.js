const { Client } = require('pg');
require('dotenv').config();

const DATABASE_URL = "postgresql://outsaidersdb_owner:ICBRrWLxb7V5@ep-broad-cherry-a57k79ce.us-east-2.aws.neon.tech/outsaidersdb?sslmode=require";

console.log('Connecting to database with URL:', DATABASE_URL);

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect()
  .then(() => {
    console.log('Connected to the database');
    return client.end();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
