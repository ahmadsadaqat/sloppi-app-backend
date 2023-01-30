const asyncHandler = require("express-async-handler");

const Gifts = require("../models/giftsModel");
// const User = require('../models/userModel')

// @desc    Get all Gifts
// @route   GET /api/gifts
// @access  Private
const getGifts = asyncHandler(async (req, res) => {
  const gift = await Gifts.find();

  res.status(200).json(gift);
  console.log(gift, "Gifts found");
});
// @desc    Get Single gift
// @route   GET /api/gifts/:id
// @access  Private
const getSingleGift = asyncHandler(async (req, res) => {
  const gift = await Gifts.findById(req.params.id);

  res.status(200).json(gift);
  console.log(gift, "One Gift found");
});

// @desc    Set new gift
// @route   POST /api/gifts
// @access  Private
const setGift = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const gift = await Gifts.create(req.body);

  res.status(200).json(gift);
  console.log(gift, "Gift added/created");
});

// @desc    Update gift
// @route   PUT /api/gifts/:id
// @access  Private
const updateGift = asyncHandler(async (req, res) => {
  const gift = await Gifts.findById(req.params.id);

  if (!gift) {
    res.status(400);
    throw new Error("Something went wrong, gift not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the gift user
  // if (Gifts.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  const updatedGift = await Gifts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGift);
  console.log(updatedGift, "Gift updated");
});

// @desc    Delete Gift
// @route   DELETE /api/gifts/:id
// @access  Private
const deleteGift = asyncHandler(async (req, res) => {
  const gift = await Gifts.findById(req.params.id);

  if (!gift) {
    res.status(400);
    throw new Error("Gift Not found");
  }

  // // Check for user
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the gift user
  // if (Gifts.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Gifts.deleteOne();

  res.status(200).json({ id: req.params.id, message: "gift removed" });
});

module.exports = {
  getGifts,
  getSingleGift,
  setGift,
  updateGift,
  deleteGift,
};
