const fs = require('fs');
const path = require('path');

// Read trips.json data from the data folder
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8'));

module.exports.travelList = function(req, res) {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};
