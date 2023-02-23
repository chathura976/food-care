const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  commentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Comment", commentSchema);