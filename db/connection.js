const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `${__dirname}/../.env.${ENV}` });

const config = {};

if (ENV === "production") {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not set");
  }
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
} else {
  if (!process.env.PGDATABASE) {
    throw new Error("PGDATABASE not set");
  }
  // You can add other config options here if needed
  config.database = process.env.PGDATABASE;
  // Add username, password, host, port if necessary
}

// Create the pool
const pool = new Pool(config);

module.exports = pool;
