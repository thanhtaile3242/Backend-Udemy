const express = require("express");
const app = express();
const path = require("path");

// ENV
require("dotenv").config({ path: path.resolve(__dirname, "./other/.env") });
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;

// View Engine
const configViewEngine = require("./config/viewEngine.js");
configViewEngine(app);

// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const webRouter = require("./routes/web");
app.use("/", webRouter);

// Run webserver
app.listen(port, hostName, () => {
    console.log("example running on", port);
});
