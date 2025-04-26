const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
} = require("../controllers/post.controller");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.put("/:id", editPost);
router.delete("/:id", removePost);

module.exports = router;
