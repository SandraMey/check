const mysql = require('mysql2');
require('dotenv').config({ debug: process.env.DEBUG })

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user:  'root',
  password: 'root',
  database: 'checkpoint'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});

module.exports = connection;