exports.index = (req, res) => {
  res.render('home', {
    title: 'Welcome to Travlr',
    content: 'This is the homepage rendered using Handlebars and MVC structure.'
  });
};
