





let getHomePage = (req, res) => {
  return res.render('homePage.ejs');
};

module.exports = {
  getHomePage: getHomePage,
};
