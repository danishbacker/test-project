/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `UserController.new()`
   * This loads the signup page new.ejs
   */
  new: function(req, res) {
    res.locals.flash = _.clone(req.session.flash);
    res.view();
    // req.session.flash = {};
  },

  /**
   * `UserController.create()`
   */

  // Create user with params sent from the Form new.ejs
  create: function(req, res, next) {
    User.create (req.params.all(), function userCreated (err, user) {
      // If there is an error
      if (err){
        // console.log(err);
        req.session.flash = {
          err: err
        }

        return res.redirect('user/new');
      }
      // Else user created succesfully redirect to users list
      res.json(user);
      req.session.flash = {};
    });
  }

  /**
   * `UserController.login()`
   */
  // login: function (req, res) {
  //   // return res.json({
  //   //   todo: 'login() is not implemented yet!'
  //   // });
  //   return res.login({
  //     successRedirect: '/'
  //   });
  // },


  /**
   * `UserController.logout()`
   */
  // logout: function (req, res) {
  //   // return res.json({
  //   //   todo: 'logout() is not implemented yet!'
  //   // });
  //   return req.logout();
  //   return res.ok('Logged out successfully.');
  // },


  /**
   * `UserController.signup()`
   */
  // signup: function (req, res) {
  //   User.create(req.params.all()).exec(function (err, user) {
  //     if (err) return res.negotiate(err);
  //     req.login(user, function (err){
  //       if (err) return res.negotiate(err);
  //       return res.redirect('/welcome');
  //     });
  //   });
  // }
};

