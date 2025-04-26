const postModel = require("../models/post.model");

const createPost = postModel.createPost;
const getAllPosts = postModel.getAllPosts;
const getPostById = postModel.getPostById;
const updatePost = postModel.updatePost;
const deletePost = postModel.deletePost;

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
