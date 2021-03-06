// const mysql = require("mysql2");

// let conn = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DB,
//   port: process.env.DBPORT,
// });

const conn = require('serverless-mysql')({
  config: {
    host     : process.env.HOST,
    database : process.env.DB,
    user     : process.env.USER,
    password : process.env.PASSWORD,
  }
})

module.exports = conn;