const asyncHandler = require("express-async-handler");

const Ideas = require("../models/ideasModel");
// const User = require('../models/userModel')

// @desc    Get all Ideas
// @route   GET /api/ideas
// @access  Private
const getIdeas = asyncHandler(async (req, res) => {
  const idea = await Ideas.find();

  res.status(200).json(idea);
  console.log(idea, "Ideas found");
});
// @desc    Get Single Idea
// @route   GET /api/ideas/:id
// @access  Private
const getSingleIdea = asyncHandler(async (req, res) => {
  const idea = await Ideas.findById(req.params.id);

  res.status(200).json(idea);
  console.log(idea, "Single idea found");
});

// @desc    Set new idea
// @route   POST /api/ideas
// @access  Private
const setIdea = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const idea = await Ideas.create(req.body);

  res.status(200).json(idea);
  console.log(idea, "idea created");
});

// @desc    Update idea
// @route   PUT /api/ideas/:id
// @access  Private
const updateIdea = asyncHandler(async (req, res) => {
  const idea = await Ideas.findById(req.params.id);

  if (!idea) {
    res.status(400);
    throw new Error("Something went wrong, idea not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the idea user
  // if (Ideas.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedIdea = await Ideas.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedIdea);
  console.log(updatedIdea, "Idea updated");
});

// @desc    Delete Idea
// @route   DELETE /api/ideas/:id
// @access  Private
const deleteIdea = asyncHandler(async (req, res) => {
  const idea = await Ideas.findById(req.params.id);

  if (!idea) {
    res.status(400);
    throw new Error("Idea Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the Idea user
  // if (Ideas.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Ideas.deleteOne();

  res.status(200).json({ id: req.params.id, message: "Idea removed" });
});

module.exports = {
  getIdeas,
  getSingleIdea,
  setIdea,
  updateIdea,
  deleteIdea,
};
