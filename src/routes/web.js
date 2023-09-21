const { getHomepage, getAbout } = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();

router.get("/home", getHomepage);
router.get("/about", getAbout);

module.exports = router;
