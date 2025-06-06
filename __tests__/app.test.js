const endpointsJson = require("../endpoints.json");

/* Set up your test imports here */

const request = require("supertest");
const app = require("../app.js");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const data = require("../db/data/test-data/index");

/* Set up your beforeEach & afterAll functions here */
beforeAll(() => seed(data));
afterAll(() => db.end());

//API PATH TEST
describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body: { endpoints } }) => {
        expect(endpoints).toEqual(endpointsJson);
      });
  });
});

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
