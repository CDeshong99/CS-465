const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Set views directory to app_server/views
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const travelRoutes = require('./app_server/routes/travel');
app.use('/travel', travelRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

