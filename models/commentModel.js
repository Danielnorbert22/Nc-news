const db = require("../db/connection.js");

const fetchCommentById = (id) => {
  return db
    .query(
      `SELECT comment_id, author, body, created_at, votes, article_id 
       FROM comments 
       WHERE article_id = $1 
       ORDER BY created_at DESC`,
      [id]
    )
    .then(({ rows }) => rows);
};

module.exports = { fetchCommentById };
