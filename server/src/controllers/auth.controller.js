const { authenticateUser, createUser } = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await createUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Register failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authenticateUser(email, password);
    if (!result) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = { register, login };
