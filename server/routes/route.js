const express = require('express');
const router = express.Router();
const Alien = require('../models/model');

// Get all aliens
router.get('/', async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send('Error ' + err);
  }
});

// Get a specific alien by ID
router.get('/:id', async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send('Error ' + err);
  }
});

// Create a new alien
router.post('/', async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
    rollno: req.body.rollno,  // Include rollno
    college: req.body.college // Include college
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send('Error ' + err);
  }
});

// Update a specific alien by ID
router.patch('/:id', async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    if (req.body.sub !== undefined) alien.sub = req.body.sub;
    if (req.body.rollno !== undefined) alien.rollno = req.body.rollno;  // Update rollno
    if (req.body.college !== undefined) alien.college = req.body.college; // Update college
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send('Error ' + err);
  }
});

module.exports = router;
