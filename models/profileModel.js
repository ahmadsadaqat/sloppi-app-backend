const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please add a text value"],
    },
    anniversaryDate: {
      type: Date,
      required: [false],
    },
    workAnniversaryDate: {
      type: Date,
      required: [false],
    },
    colors: {
      type: String,
      required: [true, "Please add a text value"],
    },
    flowers: {
      type: String,
      required: [true, "Please add a text value"],
    },
    friends: {
      type: String,
      required: [true, "Please add a text value"],
    },
    foods: {
      type: String,
      required: [true, "Please add a text value"],
    },
    dessert: {
      type: String,
      required: [true, "Please add a text value"],
    },
    destination: {
      type: String,
      required: [true, "Please add a text value"],
    },
    hobbies: {
      type: String,
      required: [true, "Please add a text value"],
    },
    movies: {
      type: String,
      required: [true, "Please add a text value"],
    },
    relaxationMode: {
      type: String,
      required: [true, "Please add a text value"],
    },
    restaurants: {
      type: String,
      required: [true, "Please add a text value"],
    },
    songs: {
      type: String,
      required: [true, "Please add a text value"],
    },
    annoyances: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
