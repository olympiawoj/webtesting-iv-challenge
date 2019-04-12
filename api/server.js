const express = require("express");

const server = express();

//import routers here
const authRouter = require("../auth/auth-router.js");
server.use(express.json());
//implement routers
server.use("/api/auth/", authRouter);
server.get("/", (req, res) => {
  res.send("testing the server and its workin aight");
});

module.exports = server;
