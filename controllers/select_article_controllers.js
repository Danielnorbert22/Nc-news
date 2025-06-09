const { fetchArticleById, fetchArticles } = require("../models/articleModel");
const { incVotes } = require("../models/articleModel");

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

const postVotesToArticles = (request, response, next) => {
  const { article_id } = request.params;
  const { inc_votes } = request.body;

  if (typeof inc_votes !== "number") {
    return next({ status: 400, msg: "Invalid Value" });
  } else
    incVotes(article_id, inc_votes)
      .then((rows) => {
        const article = rows[0];
        if (!article) {
          return next({ status: 404, msg: "Article not found" });
        }
        response.status(200).send({ article });
      })
      .catch(next);
};

module.exports = { postVotesToArticles, selectArticleById, selectArticles };
