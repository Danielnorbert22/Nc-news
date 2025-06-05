const request = require("supertest");
const seed = require("./db/seeding/seed.js");
const data = require("./db/data/test-data/index.js");
const db = require("./db/connection.js");
const app = require("./app");

app.listen(9090, () => {
  console.log("Server is listening on port 9090...");
});
