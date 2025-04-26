const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../models/post.model");

const getPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await getPostById(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
};

const addPost = async (req, res) => {
  const newPost = await createPost(req.body);
  res.status(201).json(newPost);
};

const editPost = async (req, res) => {
  const updated = await updatePost(req.params.id, req.body);
  res.json(updated);
};

const removePost = async (req, res) => {
  await deletePost(req.params.id);
  res.status(204).end();
};

module.exports = {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
};
