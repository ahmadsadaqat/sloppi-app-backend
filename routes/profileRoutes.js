const express = require("express");
const router = express.Router();
const {
  getProfiles,
  getSingleProfile,
  setProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getProfiles).post(setProfile);
router
  .route("/:id")
  .delete(deleteProfile)
  .put(updateProfile)
  .get(getSingleProfile);

module.exports = router;
