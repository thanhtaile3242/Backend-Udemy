const express = require("express");
const app = express();
const path = require("path");
const connection =  require("./config/dataBase.js");
const fileUpload = require("express-fileupload");

// ENV
require("dotenv").config({ path: path.resolve(__dirname, "./other/.env") });
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;

// View Engine
const configViewEngine = require("./config/viewEngine.js");
configViewEngine(app);

// Config file upload
 app.use(fileUpload());

// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const webRouters = require("./routes/web");
const apiRouters = require("./routes/api.js");
app.use("/", webRouters);
app.use("/v1/api/", apiRouters);

// MongoDB
const { MongoClient } = require("mongodb");








(async()=>{
    // Check connection
try{
    // await connection(); (using mongoose)

    // Using mongodb driver
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    const dbName = "hoidanit"
    await client.connect();
    console.log("Connected to MongoDB successfully");

    // const db = client.db(dbName);
    // const collection = db.collection("users");

    // Run server
    app.listen(port, hostName, () => {
        console.log("Backend running on", port);
    });
}catch(error){
    console.log(">>>> Error connect to Mongoose:",error)
    } 
})();

