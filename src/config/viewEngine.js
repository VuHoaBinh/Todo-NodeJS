const express = require('express');


let configViewEngine = (app) => {
    // lay thu muc anh
    app.use(express.static("./src/public")); 
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = configViewEngine;