const asyncHandler = require("express-async-handler");

const Spaces = require("../models/spacesModel");
// const User = require('../models/userModel')

// @desc    Get all Spaces
// @route   GET /api/spaces
// @access  Private
const getSpaces = asyncHandler(async (req, res) => {
  const spaces = await Spaces.find();

  res.status(200).json(spaces);
  console.log(spaces, "Spaces found");
});
// @desc    Get Single Space
// @route   GET /api/spaces/:id
// @access  Private
const getSingleSpace = asyncHandler(async (req, res) => {
  const spaces = await Spaces.findById(req.params.id);

  res.status(200).json(spaces);
  console.log(spaces, "one space found");
});

// @desc    Set Spaces
// @route   POST /api/spaces
// @access  Private
const setSpaces = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const spaces = await Spaces.create(req.body);

  res.status(200).json(spaces);
  console.log(spaces, "Space created");
});

// @desc    Update spaces
// @route   PUT /api/spaces/:id
// @access  Private
const updateSpaces = asyncHandler(async (req, res) => {
  const spaces = await Spaces.findById(req.params.id);

  if (!spaces) {
    res.status(400);
    throw new Error("Something went wrong, Spaces not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the spaces user
  // if (Spaces.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedSpaces = await Spaces.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedSpaces);
  console.log(updatedSpaces, "Spaces updated");
});

// @desc    Delete Spaces
// @route   DELETE /api/spaces/:id
// @access  Private
const deleteSpaces = asyncHandler(async (req, res) => {
  const spaces = await Spaces.findById(req.params.id);

  if (!spaces) {
    res.status(400);
    throw new Error("Spaces Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the goal user
  // if (Spaces.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Spaces.deleteOne();

  res.status(200).json({ id: req.params.id, message: "Spaces removed" });
});

module.exports = {
  getSpaces,
  getSingleSpace,
  setSpaces,
  updateSpaces,
  deleteSpaces,
};
