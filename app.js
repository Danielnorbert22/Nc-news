const express = require("express");
const app = express();
const db = require("./db/connection.js");

const {
  selectArticles,
  selectArticleById,
} = require("./controllers/select_article_controllers.js");
const { selectTopics } = require("./controllers/select_topic_controllers.js");
const { selectUsers } = require("./controllers/select_user_controllers.js");
const { selectApi } = require("./controllers/select_api_controllers.js");

app.use(express.json());

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.msg || "Internal Server Error" });
});

app.get("/api", selectApi);

app.get("/api/topics", (request, response, next) => {
  selectTopics()
    .then((topics) => {
      response.status(200).json({ topics });
    })
    .catch(next);
});

app.get("/api/articles", selectArticles);

app.get("/api/users", selectUsers);

app.get("/api/articles/:article_id", selectArticleById);

module.exports = app;
