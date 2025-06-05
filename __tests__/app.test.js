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
describe("GET /api/topics", () => {
  test("200: Responds with an object with the key of topics and the value of an array of topic objects. Each of which should have the  properties slug and descriptiont", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((response) => {
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.topics)).toBe(true);
      });
  });
});
