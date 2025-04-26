const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByUsername } = require("../models/user.model");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);
  if (!user) return res.status(401).json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};

module.exports = {
  login,
};
