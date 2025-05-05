import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("Template", templateSchema);
