const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String },
    other: { type: String },
    pickupTimes: { type: String },
    listDays: { type: String },
    location: {
      lan: {
        type: String,
      },
      lon: {
        type: String,
      },
    },
    imageUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FoodPost", foodSchema);
