const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require("../controllers/apiController.js");
// API 1
routerAPI.get("/", (req, res) => {
    res.send("Hello World with API");
});

// API 2 (GET)
routerAPI.get("/users", getUsersAPI);

// API 3 (POST)
routerAPI.post("/users",postCreateUserAPI);

// API 4 (PUT)
routerAPI.put("/users",putUpdateUserAPI);

// API 5 (DELETE)
routerAPI.delete("/users", deleteUserAPI);

// API 6 (Upload file)
routerAPI.post("/files",postUploadMultipleFilesAPI);

// Exports
module.exports = routerAPI;
