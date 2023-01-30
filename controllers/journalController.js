const asyncHandler = require("express-async-handler");

const Journal = require("../models/journalModel");
// const User = require('../models/userModel')

// @desc    Get all Journals
// @route   GET /api/journal
// @access  Private
const getJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.find();

  res.status(200).json(journal);
  console.log(journal, "Journals found");
});
// @desc    Get Single journal
// @route   GET /api/journal/:id
// @access  Private
const getSingleJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  res.status(200).json(journal);
  console.log(journal, "journal found");
});

// @desc    Set new journal
// @route   POST /api/journal
// @access  Private
const setJournal = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const journal = await Journal.create(req.body);

  res.status(200).json(journal);
});

// @desc    Update journal
// @route   PUT /api/journal/:id
// @access  Private
const updateJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    res.status(400);
    throw new Error("Something went wrong, journal not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the spaces user
  // if (Journal.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedJournal = await Journal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedJournal);
  console.log(updatedJournal, "Journal updated");
});

// @desc    Delete Journal
// @route   DELETE /api/journal/:id
// @access  Private
const deleteJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    res.status(400);
    throw new Error("journal Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the goal user
  // if (Journal.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Journal.deleteOne();

  res.status(200).json({ id: req.params.id, message: "Journal removed" });
});

module.exports = {
  getJournal,
  getSingleJournal,
  setJournal,
  updateJournal,
  deleteJournal,
};
