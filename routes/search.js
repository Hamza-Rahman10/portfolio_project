const express = require('express'); //express package
const db = require('../db'); //connect to database
const router = express.Router();

router.get('/search', async (req, res) => { //search for different courses
  const query = req.query.q || '';
  try {
    const [results] = await db.execute('SELECT * FROM courses WHERE title LIKE ?', [`%${query}%`]); //course text box
    res.render('search', { courses: results, query });
  } catch (err) {
    res.status(500).send(err.message); //message output
  }
});

module.exports = router;
