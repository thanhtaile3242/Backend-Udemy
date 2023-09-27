const {
    getHomepage,
    getAbout,
    postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser
} = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();

// Home
router.get("/home", getHomepage);
router.get("/about", getAbout);
// create
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
// update
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);

module.exports = router;
