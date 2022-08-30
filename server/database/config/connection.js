const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV, DB_URL, TEST_DB, DATABASE_URL,
} = process.env;

const dbUrl = '';

if (NODE_ENV === 'development') dbUrl = DB_URL;
else if (NODE_ENV === 'production') dbUrl = DATABASE_URL;
else if (NODE_ENV === 'test') dbUrl = TEST_DB;
else throw Error('No DB URL');

const connection = new Pool({
  connectionString: dbUrl,
  ssl: false,
});

module.exports = connection;
