// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); //set ejs like templates
app.use(express.static('public')); //for static files like CSS

// Routes
const mainRoutes = require('./routes/main'); // Home and about routes
const searchRoutes = require('./routes/search'); // Search functionality
const courseRoutes = require('./routes/courses'); // course functionality

app.use(mainRoutes);
app.use(searchRoutes);
app.use(courseRoutes);

// Render Registration Page
app.get('/register', (req, res) => {
  res.render('register');
});

// Handle Registration Form Submission
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).send('Registration failed.');
      }
      res.send('Registration successful!');
  });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//testing 

