const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'yt4307.iptime.org',
    user : 'icefe',
    password : 'icefe0706',
    database : 'fe_test'
});

// const db = mysql.createPool({
//     host : 'home.astro36.me',
//     user : 'inha',
//     password : 'ice2022',
//     database : 'fe_test'
// });
 
module.exports = db;