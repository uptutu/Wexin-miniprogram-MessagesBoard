let mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mini'
});

module.exports = db;
