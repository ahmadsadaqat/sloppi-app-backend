const express = require("express");
const router = express.Router();
const {
  getGifts,
  getSingleGift,
  setGift,
  updateGift,
  deleteGift,
} = require("../controllers/giftsController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getGifts).post(setGift);
router.route("/:id").delete(deleteGift).put(updateGift).get(getSingleGift);

module.exports = router;
