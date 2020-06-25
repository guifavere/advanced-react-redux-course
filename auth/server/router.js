const Authenctication = require('./controllers/authentication');

module.exports = function(app) {
  app.post('/signup', Authenctication.signup);
};
