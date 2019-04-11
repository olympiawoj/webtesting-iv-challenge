const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("testing the server and its workin aight");
});

module.exports = server;
