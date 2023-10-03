const {
    getHomepage,
    postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandlerRemoverUser
} = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();

// Home
router.get("/home", getHomepage); // Hiện trang hiển thị User
// create
router.get("/create", getCreatePage); // Hiện trang create
router.post("/create-user", postCreateUser); // Thực hiện create
// update
router.get("/update/:id", getUpdatePage); // Hiện trang update
router.post("/update-user", postUpdateUser); // Thực hiện update
// delete
router.post("/delete-user/:id", postDeleteUser); // Hiện trang delete user
router.post("/delete-user",postHandlerRemoverUser); // Thực hiện remove user

 

module.exports = router;
