const express = require("express");
const router = express.Router();
const verificarToken = require("../middleware/auth");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsControllers");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/",verificarToken, createPost);
router.put("/:id",verificarToken, updatePost);
router.delete("/:id",verificarToken, deletePost);

module.exports = router;
