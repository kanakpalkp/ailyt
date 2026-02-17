const express = require('express');
const router = express.Router();

// Get all projects
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all projects' });
});

// Get featured projects
router.get('/featured', (req, res) => {
  res.status(200).json({ message: 'Get featured projects' });
});

// Get single project
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Get single project', id: req.params.id });
});

// Create project
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Project created' });
});

// Update project
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Project updated', id: req.params.id });
});

// Delete project
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Project deleted', id: req.params.id });
});

module.exports = router;
