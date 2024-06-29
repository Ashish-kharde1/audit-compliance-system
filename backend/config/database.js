const { Client } = require('pg');

const connectDB = async () => {
  const client = new Client({
    user: 'your_username',
    host: 'localhost',
    database: 'audit_compliance',
    password: 'your_password',
    port: 5432,
  });

  await client.connect();
  console.log('Connected to PostgreSQL database');
};

module.exports = { connectDB };
