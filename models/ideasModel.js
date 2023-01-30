const mongoose = require("mongoose");

const ideasSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    text: {
      type: String,
      required: [true, "field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ideas", ideasSchema);
