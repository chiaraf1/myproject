const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String },
  categories: { type: [String] },
  video: {type: String},
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
