const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
    // Configure ViewEngine files (HTML)
    app.set("views", path.join("./", "views")); // chạy đường dẫn từ file server.js
    app.set("view engine", "ejs");
    // Configure Static files (CSS, Images and JS)
    app.use(express.static(path.join("./", "public"))); // chạy đường dẫn từ file server.js
};

module.exports = configViewEngine;
