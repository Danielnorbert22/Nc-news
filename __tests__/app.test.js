/* Set up your test imports here */

const request = require("supertest");
const app = require("../app.js");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const data = require("../db/data/test-data/index");

/* Set up your beforeEach & afterAll functions here */
beforeAll(() => seed(data));
afterAll(() => db.end());

//TOPICS  TESTING
describe("GET /api/topics", () => {
  test("200: Responds with an object with the key of topics and the value of an array of topic objects. Each of which should have the  properties slug and descriptiont", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((response) => {
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.topics)).toBe(true);
        expect(response.body).toEqual({
          topics: [
            { slug: "mitch", description: "The man, the Mitch, the legend" },
            { slug: "cats", description: "Not dogs" },
            { slug: "paper", description: "what books are made of" },
          ],
        });
      });
  });
});

// USERS TESTING
describe("GET /api/users", () => {
  test("200: responds with users data", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then((response) => {
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.users)).toBe(true);
      });
  });
});

// ARTICLES TESTING
describe("GET /api/articles", () => {
  test("200: responds with type of data returned", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((response) => {
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.articles)).toBe(true);
      });
  });

  test("200: responds with articles data with a count of commments while checking each property", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((response) => {
        response.body.articles.forEach((article) => {
          expect(article).toHaveProperty("title");
          expect(article).toHaveProperty("topic");
          expect(article).toHaveProperty("author");
          expect(article).toHaveProperty("created_at");
          expect(article).toHaveProperty("votes");
          expect(article).toHaveProperty("comment_count");
        });
      });
  });
});

describe("GET /api/articles/:articles_id", () => {
  test("responds with an article by id", () => {
    return request(app)
      .get("/api/articles/3")
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("article");
        expect(response.body.article).toHaveProperty("article_id", 3);
      });
  });
});

describe("GET /api/articles/:articles_id/comments", () => {
  test("responds with comments from an article by id", () => {
    return request(app)
      .get("/api/articles/3/comments")
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("comments");
        expect(Array.isArray(response.body.comments)).toBe(true);
      });
  });
});

describe.only("PATCH /api/articles/:article_id", () => {
  test("200: increment votes by positive number", () => {
    return request(app)
      .patch("/api/articles/3")
      .send({ inc_votes: 10 })
      .expect(200)
      .then((response) => {
        console.log("Response Body:", response.body);
        expect(response.body.article).toHaveProperty("votes");
        expect(response.body.article.votes).toEqual(10);
      });
  });

  test("200: decrement votes by negative number", () => {
    return seed(data)
      .then(() => request(app).get("/api/articles/3"))
      .then((preResponse) => {
        const initialVotes = preResponse.body.article.votes;
        return request(app)
          .patch("/api/articles/3")
          .send({ inc_votes: -5 })
          .expect(200)
          .then((response) => {
            expect(response.body).toHaveProperty("article");
            expect(response.body.article).toHaveProperty("votes");
            expect(response.body.article.votes).toBe(initialVotes - 5);
          });
      });
  });
  test("400: invalid inc_votes (not a number)", () => {
    return request(app)
      .patch("/api/articles/3")
      .send({ inc_votes: "not-a-number" })
      .expect(400);
  });

  test("404: article not found", () => {
    return request(app)
      .patch("/api/articles/999999")
      .send({ inc_votes: 1 })
      .expect(404);
  });
});
