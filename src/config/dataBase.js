const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../other/.env") });
// SQL
const mysql = require("mysql2/promise");
// const connection = mysql.createPool({
//     host: process.env.HOST_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     waitForConnections: 10,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// Mongoose
const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    {value: 2,label: "connecting"},
    {value: 3, label: "disconnecting"}
    ];

const mongoose = require("mongoose");
const connection = async()=>{
        const options = {
            user:process.env.DB_USER,
            pass:process.env.DB_PASSWORD,
            dbName:process.env.DB_NAME,
        };
        await mongoose.connect("mongodb://localhost:27018",options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db
   

}

module.exports = connection;
