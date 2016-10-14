var User = require('./../js/ghuser.js').ghUserModule;
var apiKey = require('./../.env').apiKey;

var myUser = new User('daneden');
console.log(myUser);



myUser.getRepos();
