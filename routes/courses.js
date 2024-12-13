const express = require('express'); //express package
const db = require('../db'); //connect to databse
const router = express.Router();

router.get('/add', (req, res) => { //course button finder
  res.render('add_course');
});

router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  try {
    await db.execute('INSERT INTO courses (title, description) VALUES (?, ?)', [title, description]); //search course query
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message); //output description
  }
});

module.exports = router;