const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  content: { type: String, required: true },
  column: { type: String, enum: ['todo', 'doing', 'done'], default: 'todo' },
  img: String,
  label: Boolean,
  checklist: String,
});

module.exports = mongoose.model('Task', taskSchema);
