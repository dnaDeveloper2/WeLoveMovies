if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

// const sayHello = (req, res, next) => {
//     res.send("Hello!");
//   };

// app.use(sayHello);

module.exports = app;
