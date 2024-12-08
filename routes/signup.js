const express = require('express');
const router = express.Router();

// GET /signup - Render the signup page
router.get('/', (req, res) => {
    res.render('signup'); // Render the signup.ejs file
});

// POST /signup - Handle form submission
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // TODO: Save to the database (example query with MySQL)
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Signup successful!');
    });
});

module.exports = router;
