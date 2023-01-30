const express = require("express");
const router = express.Router();
const {
  getStats,
  getSingleStats,
  setStats,
  updateStats,
  deleteStats,
} = require("../controllers/statsController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getStats).post(setStats);
router.route("/:id").delete(deleteStats).put(updateStats).get(getSingleStats);

module.exports = router;
