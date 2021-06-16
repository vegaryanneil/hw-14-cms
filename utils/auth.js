const withAuth = (req, res, next) => {
    // Routes user to a page depending if they are logged in or not
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;