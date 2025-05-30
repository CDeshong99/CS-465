const mongoose = require('mongoose');

// Local MongoDB URI (adjust if using MongoDB Atlas)
const dbURI = 'mongodb://127.0.0.1/travlr'; // 'travlr' is the DB name

// Connect to the database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Success
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

// Error
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

// Disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
