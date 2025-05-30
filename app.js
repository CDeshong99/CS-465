const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Database connection
require('./app_server/models/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Handlebars view engine
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware (optional, for POST/JSON handling)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
const apiRoutes = require('./app_server/routes/api');
app.use('/api', apiRoutes);

const travelRoutes = require('./app_server/routes/travel');
app.use('/travel', travelRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});



