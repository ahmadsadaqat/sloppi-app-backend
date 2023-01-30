const express = require("express");
const router = express.Router();
const {
  getJournal,
  getSingleJournal,
  setJournal,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getJournal).post(setJournal);
router
  .route("/:id")
  .delete(deleteJournal)
  .put(updateJournal)
  .get(getSingleJournal);

module.exports = router;
