const pool = require("../config/db");

const createPost = async ({ title, content, userId }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const result = await pool.query(
    "INSERT INTO posts (title, slug, content, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, slug, content, userId]
  );
  return result.rows[0];
};

const getAllPosts = async () => {
  const result = await pool.query(
    "SELECT * FROM posts ORDER BY created_at DESC"
  );
  return result.rows;
};

const getPostById = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return result.rows[0];
};

const updatePost = async (id, { title, content }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const result = await pool.query(
    "UPDATE posts SET title = $1, slug = $2, content = $3 WHERE id = $4 RETURNING *",
    [title, slug, content, id]
  );
  return result.rows[0];
};

const deletePost = async (id) => {
  await pool.query("DELETE FROM posts WHERE id = $1", [id]);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
