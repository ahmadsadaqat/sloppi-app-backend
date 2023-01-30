const express = require("express");
const router = express.Router();
const {
  getSpaces,
  getSingleSpace,
  setSpaces,
  updateSpaces,
  deleteSpaces,
} = require("../controllers/spacesController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getSpaces).post(setSpaces);
router.route("/:id").delete(deleteSpaces).put(updateSpaces).get(getSingleSpace);

module.exports = router;
