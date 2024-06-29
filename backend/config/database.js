const { Client } = require('pg');

const connectDB = async () => {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'audit_compliance',
    password: 'asd',
    port: 5432,
  });

  await client.connect();
  console.log('Connected to PostgreSQL database');
};

module.exports = { connectDB };
