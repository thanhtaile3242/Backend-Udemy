const express = require("express");
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require("../controllers/apiController.js");
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteArrayCustomers } = require("../controllers/customerController.js");
const { postCreateProject, getAllProjects, updateProjects, deleteProjects } = require('../controllers/projectController.js');
const { getAllTask, postCreateTask, updateTask, deleteTask } = require("../controllers/taskController.js");

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
  

// Query string
routerAPI.get("/info",(req, res) => {
    console.log("Check query",req.query.name);
    return res.status(200).json({
        data:req.query
    })
});
// Req.params
routerAPI.get("/info/:name/:address", (req, res) => {
    console.log("Check query", req.params);
    return res.status(200).json({
        data:req.params
    })
})


// Project API
// Get the project information
routerAPI.get('/projects', getAllProjects);
// Post create a project
routerAPI.post('/projects', postCreateProject);
// Udate 
routerAPI.put('/projects', updateProjects);
// Delete
routerAPI.delete('/projects', deleteProjects);

// Task API
routerAPI.get('/tasks', getAllTask);
routerAPI.post('/tasks', postCreateTask);
routerAPI.put('/tasks', updateTask);
routerAPI.delete('/tasks', deleteTask);






// Exports
module.exports = routerAPI;
