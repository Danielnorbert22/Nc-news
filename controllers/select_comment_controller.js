const { fetchCommentById } = require("../models/commentModel");
const db = require("../db/connection");

const selectCommentById = (request, response, next) => {
  const { article_id } = request.params;

  fetchCommentById(article_id)
    .then((rows) => {
      if (rows.length === 0) {
        return next({ status: 404, msg: "Article not found" });
      }
      response.status(200).send({ comments: rows });
      console.log("Fetched comment:", rows);
    })
    .catch(next);
};

module.exports = { selectCommentById };
