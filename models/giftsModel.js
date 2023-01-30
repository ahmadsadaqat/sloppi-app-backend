const mongoose = require("mongoose");

const giftsSchema = mongoose.Schema(
  {
    //   user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },
    occation: {
      type: String,
      required: [true, "Please add a occation"],
    },
    dateOfDelivery: {
      type: Date,
      required: [true],
    },
    address: {
      type: String,
      required: [true, "Please add a Address"],
    },
    note: {
      type: String,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gifts", giftsSchema);
