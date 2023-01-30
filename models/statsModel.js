const mongoose = require("mongoose");

const statsSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    gifts: {
      type: String,
      required: [true, "Please add a text value"],
    },
    ideas: {
      type: String,
      required: [true, "Please add a text value"],
    },
    spaces: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stats", statsSchema);
