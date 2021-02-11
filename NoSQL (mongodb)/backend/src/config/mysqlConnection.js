const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yuyuhakusho',
  database: 'fullstackeletro',
});

module.exports = connection;