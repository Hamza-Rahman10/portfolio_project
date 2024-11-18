const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/search', async (req, res) => {
  const query = req.query.q || '';
  try {
    const [results] = await db.execute('SELECT * FROM courses WHERE title LIKE ?', [`%${query}%`]);
    res.render('search', { courses: results, query });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
