// Get all of our friend data
var data = require('../data.json');
exports.loginPage = function(req, res){
    res.render('login_page');
}
exports.view = function(request, response){
  console.log(data);
  response.render('index', data);
};
