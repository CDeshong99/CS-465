exports.index = (req, res) => {
  res.render('travel', {
    title: 'Travlr Destinations',
    destinations: ['Paris', 'New York', 'Tokyo']
  });
};
