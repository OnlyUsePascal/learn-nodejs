const mysql = require('mysql2');

const mysqlDb = mysql.createConnection({
  host: 'localhost',
  user: 'nodejs',
  password: '123',
  database: 'nodejs_t1',
});

module.exports = mysqlDb.promise();

