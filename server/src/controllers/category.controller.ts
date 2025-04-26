const {
  getAllCategories,
  createCategory,
} = require("../models/category.model");

const getCategories = async (req, res) => {
  const categories = await getAllCategories();
  res.json(categories);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await createCategory(name);
  res.status(201).json(category);
};

module.exports = {
  getCategories,
  addCategory,
};
