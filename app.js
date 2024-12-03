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
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Routes
const mainRoutes = require('./routes/main'); // Home and about routes
const searchRoutes = require('./routes/search'); // Search functionality
const courseRoutes = require('./routes/courses'); // Add course functionality

app.use(mainRoutes);
app.use(searchRoutes);
app.use(courseRoutes);

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//testing 

