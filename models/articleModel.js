const db = require("../db/connection");

const fetchArticleById = (id) => {
  return db
    .query(`SELECT * FROM articles WHERE articles.article_id = $1`, [id])
    .then((result) => {
      return result;
    });
};

const fetchArticles = () => {
  const sqlString = `
    SELECT 
    articles.title, 
    articles.topic, 
    articles.author, 
    articles.created_at, 
    articles.votes,  
    COUNT(comments.comment_id) AS comment_count 
    FROM articles 
    LEFT JOIN comments ON comments.article_id = articles.article_id 
    GROUP BY articles.article_id 
    ORDER BY articles.created_at DESC;
    `;
  return db.query(sqlString).then(({ rows }) => {
    return rows;
  });
};

const incVotes = async (article_id, inc_votes) => {
  const result = await db.query(
    `UPDATE articles SET votes = votes + $1 WHERE articles.article_id = $2 RETURNING *`,
    [inc_votes, article_id]
  );
  const { rows } = result;

  return rows;
};

module.exports = { incVotes, fetchArticleById, fetchArticles };
