const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [email, hashedPassword]
  );
  return result.rows[0];
};

const authenticateUser = async (email, password) => {
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (user.rowCount === 0) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.rows[0].password);
  if (!isValid) {
    return null;
  }

  const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return { token };
};

module.exports = { createUser, authenticateUser };
