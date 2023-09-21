const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
    app.set("views", path.join("./", "views"));
    app.set("view engine", "ejs");
    //
    app.use(express.static(path.join("./", "public")));
};

module.exports = configViewEngine;
