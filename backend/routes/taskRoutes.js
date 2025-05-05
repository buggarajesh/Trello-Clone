const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  moveTask,
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id/move', moveTask);

module.exports = router;
