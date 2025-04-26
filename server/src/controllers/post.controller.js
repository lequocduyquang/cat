const postService = require("../services/post.service");

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await postService.createPost({
      title,
      content,
      userId: req.user.id,
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Create post failed" });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fetch posts failed" });
  }
};

const getOne = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fetch post failed" });
  }
};

const update = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await postService.updatePost(req.params.id, {
      title,
      content,
    });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Update post failed" });
  }
};

const remove = async (req, res) => {
  try {
    await postService.deletePost(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Delete post failed" });
  }
};

module.exports = { create, getAll, getOne, update, remove };
