const express = require('express'); //uses express extention

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'); //home page
});

router.get('/about', (req, res) => {
  res.render('about'); //about page
});

module.exports = router;

//toggle through different pages