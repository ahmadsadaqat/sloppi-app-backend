const mongoose = require("mongoose");

const journalSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    // what's been going well?
    text1: {
      type: String,
      required: [true, "Please add a text value"],
    },
    // what hasn't been going well?
    text2: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Journal", journalSchema);
