const asyncHandler = require("express-async-handler");

const Profile = require("../models/profileModel");
// const User = require('../models/userModel')

// @desc    Get all Profiles
// @route   GET /api/profile
// @access  Private
const getProfiles = asyncHandler(async (req, res) => {
  const profile = await Profile.find();

  res.status(200).json(profile);
  console.log(profile, "Profiles found");
});
// @desc    Get Single profile
// @route   GET /api/profile/:id
// @access  Private
const getSingleProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  res.status(200).json(profile);
  console.log(profile, "one profile found");
});

// @desc    Set new Profile
// @route   POST /api/profile
// @access  Private
const setProfile = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const profile = await Profile.create(req.body);

  res.status(200).json(profile);
  console.log(profile, "Profile created");
});

// @desc    Update profile
// @route   PUT /api/profile/:id
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    res.status(400);
    throw new Error("Something went wrong, Profile not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the spaces user
  // if (Profile.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProfile);
  console.log(updatedProfile, "Profile Updated");
});

// @desc    Delete Profile
// @route   DELETE /api/profile/:id
// @access  Private
const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    res.status(400);
    throw new Error("profile Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the goal user
  // if (Profile.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Profile.deleteOne();

  res.status(200).json({ id: req.params.id, message: "Profile removed" });
});

module.exports = {
  getProfiles,
  getSingleProfile,
  setProfile,
  updateProfile,
  deleteProfile,
};
