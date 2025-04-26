const pool = require("../config/db");

const findUserByUsername = async (username) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

module.exports = {
  findUserByUsername,
};
