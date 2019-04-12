require("dotenv").config;
const express = require("express");

const server = express();

//import routers here
const authRouter = require("../auth/auth-router.js");
server.use(express.json());
//implement routers
server.use("/api/auth/", authRouter);
server.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "testing the server and its workin aight" });
});

module.exports = server;
