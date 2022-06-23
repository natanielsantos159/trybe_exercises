const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'nataniel',
  password: 'Nataniel123456*',
  database: 'model_example'});

module.exports = connection;