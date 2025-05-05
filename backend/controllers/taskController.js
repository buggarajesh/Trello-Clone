const Task = require('../models/Task');

// Get all tasks grouped by column
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    const grouped = {
      todo: [],
      doing: [],
      done: [],
    };
    tasks.forEach(task => {
      grouped[task.column].push(task);
    });
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add new task to "todo"
exports.addTask = async (req, res) => {
  const { content } = req.body;
  try {
    const newTask = new Task({ content });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
};

// Update a task's column (e.g., on drag & drop)
exports.moveTask = async (req, res) => {
  const { id } = req.params;
  const { column } = req.body;
  try {
    const updated = await Task.findByIdAndUpdate(id, { column }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to move task' });
  }
};
