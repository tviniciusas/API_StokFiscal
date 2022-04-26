const mysql = require('mysql2');
require('dotenv/config');
const username = process.env.username_mysql;
const password = process.env.password_mysql;

const connection = mysql.createConnection({
  host: '192.168.1.100',
  user: username,
  password: password,
  database: 'integrador_istock',
});

module.exports = connection;

