const knex = require("knex");

const knexConfig = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development";

//use bracket notation here bc e.target.name - whenever you're doing form control in react. it's ging to need to resolve as a property name so its going to be registering it as a string
module.exports = knex(knexConfig[dbEnv]);
