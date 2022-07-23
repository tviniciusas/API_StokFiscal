const mysql = require('mysql2');
require('dotenv/config');
const username = process.env.username_mysql;
const password = process.env.password_mysql;
const host = process.env.host;

const connection = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: 'integrador_istock',
});

module.exports = connection;

