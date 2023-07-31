const { Client } = require('pg');
require('dotenv').config();

const dataClient = new Client({
  connectionString: process.env.SERVER_URL,
});

dataClient.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1);
  }
  console.log('Connected to the database');
});

module.exports = dataClient;
