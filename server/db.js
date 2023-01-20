const { Pool } = require("pg");
const Pass = require("../config.js");


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: Pass.PASS,
  database: 'booktracker',
  port: 5432,
});
  pool.connect();

  module.exports.pool = pool;