const { fetchUsers } = require("../models/userModel");

const selectUsers = (req, res, next) => {
  fetchUsers()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch(next);
};

module.exports = { selectUsers };
