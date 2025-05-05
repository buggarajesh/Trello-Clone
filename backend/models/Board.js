import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Optional
  viewedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Board", boardSchema);
