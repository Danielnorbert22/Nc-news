const endpoints = require("../endpoints.json");

selectApi = (request, response) => {
  response.status(200).json({ endpoints });
};

module.exports = { selectApi };
