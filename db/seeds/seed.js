const db = require("../connection");
const format = require("pg-format");

function seed({ topicData, userData, articleData, commentData }) {
  return db
    .query(`DROP TABLE IF EXISTS comments`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS articles`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS topics`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS users `);
    })
    .then(() => {
      return db.query(
        `CREATE TABLE users(username VARCHAR(320) PRIMARY KEY, name VARCHAR(120), avatar_url VARCHAR(1200))`
      );
    })
    .then(() => {
      return db.query(
        `CREATE TABLE topics(description VARCHAR(3255), slug VARCHAR(255) PRIMARY KEY, img_url VARCHAR(1200))`
      );
    })
    .then(() => {
      return db.query(`CREATE TABLE articles(
              article_id SERIAL PRIMARY KEY,
              title VARCHAR(255)NOT NULL,
              topic VARCHAR(255),
              
              author VARCHAR(1000),
             
              body VARCHAR(255),
              created_at INT,
              votes INT DEFAULT 0,
              article_img_url VARCHAR(1000),
              FOREIGN KEY (topic) REFERENCES topics(slug),
              FOREIGN KEY (author) REFERENCES users(username))`);
      // F
    })
    .then(() => {
      return db.query(`CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        article_id INT,
        FOREIGN KEY (article_id) REFERENCES articles(article_id),
        body VARCHAR(255),
        votes INT,
        author VARCHAR(200),
        FOREIGN KEY (author) REFERENCES users(username),
        created_at INT
        )`);
    })
    .then(() => {
      const formattedUserData = userData.map(
        ({ username, name, avatar_url }) => {
          return [username, name, avatar_url];
        }
      );

      const sqlString1 = format(
        `INSERT INTO users(username, name, avatar_url) VALUES %L RETURNING *`,
        formattedUserData
      );
      return db.query(sqlString1);
    })
    .then(({ rows }) => {
      const formattedTopicsData = topicData.map(
        ({ description, slug, img_url }) => {
          return [description, slug, img_url];
        }
      );
      console.log(formattedTopicsData);

      const sqlString2 = format(
        `INSERT INTO topics(description, slug, img_url) VALUES %L RETURNING *`,
        formattedTopicsData
      );
      return db.query(sqlString2);
    });
}
module.exports = seed;
