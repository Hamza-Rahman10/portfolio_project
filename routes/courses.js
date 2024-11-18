const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/add', (req, res) => {
  res.render('add_course');
});

router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  try {
    await db.execute('INSERT INTO courses (title, description) VALUES (?, ?)', [title, description]);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;