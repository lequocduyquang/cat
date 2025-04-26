const pool = require("../config/db");

const getAllPosts = async () => {
  const result = await pool.query("SELECT * FROM posts ORDER BY id DESC");
  return result.rows;
};

const getPostById = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return result.rows[0];
};

const createPost = async ({
  title,
  content,
  image_url,
  category_id,
  author_id,
}) => {
  const result = await pool.query(
    "INSERT INTO posts(title, content, image_url, category_id, author_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [title, content, image_url, category_id, author_id]
  );
  return result.rows[0];
};

const updatePost = async (id, { title, content, image_url }) => {
  const result = await pool.query(
    "UPDATE posts SET title = $1, content = $2, image_url = $3 WHERE id = $4 RETURNING *",
    [title, content, image_url, id]
  );
  return result.rows[0];
};

const deletePost = async (id) => {
  await pool.query("DELETE FROM posts WHERE id = $1", [id]);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
