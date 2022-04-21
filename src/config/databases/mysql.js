const mysql = require('mysql2');
require('dotenv/config');
const password = process.env.password;
const username = process.env.username;

const connection = mysql.createConnection({
  host: 'localhost',
  user: username,
  password: password,
  database: 'integrador_istock',
});

module.exports = connection;

