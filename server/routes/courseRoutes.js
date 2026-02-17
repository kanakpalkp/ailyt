const express = require('express');
const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all courses' });
});

// Get single course
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Get single course', id: req.params.id });
});

// Create course
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Course created' });
});

// Update course
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Course updated', id: req.params.id });
});

// Delete course
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Course deleted', id: req.params.id });
});

module.exports = router;
