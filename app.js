const express = require("express");
const app = express();
const db = require("./db/connection.js");
const endpoints = require("./endpoints.json");
const { selectTopics } = require("./controllers/controllers.js");
app.use(express.json());

app.get("/api", (request, response) => {
  response.status(200).json({ endpoints });
});
app.get("/api/topics", (request, response, next) => {
  selectTopics().then((topics) => {
    response.status(200).json({ topics });
    console.log({ topics });
  });
});

module.exports = app;
