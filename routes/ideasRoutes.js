const express = require("express");
const router = express.Router();
const {
  getIdeas,
  getSingleIdea,
  setIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/ideasController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getIdeas).post(setIdea);
router.route("/:id").delete(deleteIdea).put(updateIdea).get(getSingleIdea);

module.exports = router;
