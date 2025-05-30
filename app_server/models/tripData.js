require('./db');
const mongoose = require('mongoose');
const Trip = require('./travlr');

const trips = [
  {
    code: 'NYC',
    name: 'New York Explorer',
    length: '3 days',
    start: new Date('2025-06-15'),
    resort: 'Hotel Manhattan',
    perPerson: 599,
    image: 'images/newyork.jpg',
    description: 'Explore the city that never sleeps - New York!'
  },
  {
    code: 'LON',
    name: 'London Adventure',
    length: '5 days',
    start: new Date('2025-07-01'),
    resort: 'Westminster Inn',
    perPerson: 799,
    image: 'images/london.jpg',
    description: 'Discover London’s rich history and vibrant life!'
  }
];

Trip.insertMany(trips)
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Seeding error:', err);
  });
