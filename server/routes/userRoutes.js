const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all users' });
});

// Get user profile
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Get user profile', id: req.params.id });
});

// Register user
router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered' });
});

// Login user
router.post('/login', (req, res) => {
  res.status(200).json({ message: 'User logged in' });
});

// Update user
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'User updated', id: req.params.id });
});

module.exports = router;
