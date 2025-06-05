const db = require("../connection");
const format = require("pg-format");
const { convertTimestampToDate, createLookUpObj } = require("../seeds/utils");

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
        `CREATE TABLE users(username VARCHAR(320) PRIMARY KEY, name VARCHAR(120), avatar_url VARCHAR(1000))`
      );
    })
    .then(() => {
      return db.query(
        `CREATE TABLE topics(description VARCHAR(3255), slug VARCHAR(255) PRIMARY KEY, img_url VARCHAR(1000))`
      );
    })
    .then(() => {
      return db.query(`CREATE TABLE articles(
              article_id SERIAL PRIMARY KEY,
              title VARCHAR(255)NOT NULL,
              topic VARCHAR(255),
              
              author VARCHAR(1000),
             
              body TEXT,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              votes INT DEFAULT 0,
              article_img_url VARCHAR(1000),
              FOREIGN KEY (topic) REFERENCES topics(slug),
              FOREIGN KEY (author) REFERENCES users(username))`);
      // F
    })
    .then(() => {
      return db.query(`CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        article_id INT REFERENCES articles(article_id),
        body TEXT,
        votes INT DEFAULT 0,
        author VARCHAR(200) REFERENCES users(username),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    .then(() => {
      const formattedTopicsData = topicData.map(
        ({ description, slug, img_url }) => {
          return [description, slug, img_url];
        }
      );

      const sqlString2 = format(
        `INSERT INTO topics(description, slug, img_url) VALUES %L RETURNING *`,
        formattedTopicsData
      );
      return db.query(sqlString2);
    })
    .then(() => {
      const formattedArticleData = articleData.map(
        ({
          title,
          topic,
          author,
          body,
          created_at,
          votes,
          article_img_url,
        }) => {
          const newDate = convertTimestampToDate({ created_at });

          return [
            title,
            topic,
            author,
            body,
            newDate.created_at,
            votes,
            article_img_url,
          ];
        }
      );

      const sqlString3 = format(
        `INSERT INTO articles(title, topic, author, body, created_at, votes, article_img_url) VALUES %L RETURNING *`,
        formattedArticleData
      );
      return db.query(sqlString3);
    })
    .then(({ rows }) => {
      const key = "title";
      const value = "article_id";
      const lookUpObj = createLookUpObj(rows, key, value);

      const formattedCommentData = commentData.map((comment) => {
        const { article_title, body, votes, author, created_at } = comment;
        const article_id = lookUpObj[article_title];
        const newDate = convertTimestampToDate({ created_at });
        return [article_id, body, votes, author, newDate.created_at];
      });

      const sqlString4 = format(
        `INSERT INTO comments(article_id, body, votes, author, created_at) VALUES %L RETURNING *`,
        formattedCommentData
      );
      return db.query(sqlString4);
    });
}
module.exports = seed;
