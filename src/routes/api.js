const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require("../controllers/apiController.js");
const {postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer,deleteArrayCustomers}= require("../controllers/customerController.js");

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


// Project - Customer

// Upload file image
routerAPI.post("/files",postUploadMultipleFilesAPI);
// Create a customer
routerAPI.post("/customers", postCreateCustomer);
// Create customers-many
routerAPI.post("/customers-many", postCreateArrayCustomer);
// Get all customers
routerAPI.get("/allcustomers", getAllCustomers);
// Update customer
routerAPI.put("/customer",putUpdateCustomer);
// Delete a customer
routerAPI.delete("/customer", deleteCustomer);
// Delete customers-many
routerAPI.delete("/customers-many", deleteArrayCustomers)
  
// Exports
module.exports = routerAPI;
