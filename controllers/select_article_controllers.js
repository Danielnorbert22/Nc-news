const { fetchArticleById, fetchArticles } = require("../models/articleModel");

const db = require("../db/connection");

const selectArticles = (request, response, next) => {
  fetchArticles().then((articles) => {
    response.status(200).send({ articles });
  });
};

const selectArticleById = (request, response, next) => {
  const { article_id } = request.params;

  fetchArticleById(article_id)
    .then(({ rows }) => {
      const article = rows[0];
      if (!article) {
        return next({ status: 404, msg: "Article not found" });
      }
      response.status(200).json({ article });
      console.log("Fetched article:", article);
    })
    .catch(next);
};

module.exports = { selectArticleById, selectArticles };
