const axios = require('axios');

const travelList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/trips');
    res.render('travel', { trips: response.data });
  } catch (err) {
    res.render('travel', { error: 'Failed to load trips from API' });
  }
};

module.exports = {
  travelList
};
