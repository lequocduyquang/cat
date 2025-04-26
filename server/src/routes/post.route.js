const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const authenticate = require("../middlewares/auth.middleware");

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/", authenticate, postController.create);
router.put("/:id", authenticate, postController.update);
router.delete("/:id", authenticate, postController.remove);

module.exports = router;
