const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'mysqlpw',
    database : 'demo'
});
 
module.exports = db;