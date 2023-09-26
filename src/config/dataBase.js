const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../other/.env") });
const mysql = require("mysql2/promise");
// Test connection
// 1. create connection
// const connection = mysql.createConnection({
//     host: process.env.HOST_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
    host: process.env.HOST_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections: 10,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;
