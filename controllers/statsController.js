const asyncHandler = require("express-async-handler");

const Stats = require("../models/statsModel");
// const User = require('../models/userModel')

// @desc    Get all Stats
// @route   GET /api/stats
// @access  Private
const getStats = asyncHandler(async (req, res) => {
  const stats = await Stats.find();

  res.status(200).json(stats);
  console.log(stats, "Stats found");
});
// @desc    Get Single Stat
// @route   GET /api/stats/:id
// @access  Private
const getSingleStats = asyncHandler(async (req, res) => {
  console.log("ID of stat? ", req.params.id);
  const stat = await Stats.findById(req.params.id);

  res.status(200).json(stat);
  console.log(stat, "Stat found");
});

// @desc    Set Stats
// @route   POST /api/stats
// @access  Private
const setStats = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const stats = await Stats.create(req.body);

  res.status(200).json(stats);
  console.log(stats, "Stat created");
});

// @desc    Update stats
// @route   PUT /api/stats/:id
// @access  Private
const updateStats = asyncHandler(async (req, res) => {
  const stats = await Stats.findById(req.params.id);

  if (!stats) {
    res.status(400);
    throw new Error("Something went wrong, Stats not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the stats user
  // if (Stats.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedStats = await Stats.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedStats);
  console.log(updatedStats, "Stats updated");
});

// @desc    Delete Stats
// @route   DELETE /api/stats/:id
// @access  Private
const deleteStats = asyncHandler(async (req, res) => {
  const stat = await Stats.findById(req.params.id);

  if (!stat) {
    res.status(400);
    throw new Error("Stat Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the goal user
  // if (Stats.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Stats.deleteOne();

  res.status(200).json({ id: req.params.id, message: "Stats removed" });
});

module.exports = {
  getStats,
  getSingleStats,
  setStats,
  updateStats,
  deleteStats,
};
