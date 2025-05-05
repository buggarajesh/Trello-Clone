import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  label: String,
  icon: String, // You can store icon type or reference if needed
  color: String,
});

export default mongoose.model("Category", categorySchema);
