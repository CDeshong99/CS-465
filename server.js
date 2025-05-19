const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
