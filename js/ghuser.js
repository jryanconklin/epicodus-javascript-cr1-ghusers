var apiKey = require('./../.env').apiKey;

function User(name) {
  this.username = name;
}

User.prototype.getRepos = function() {
  var name = this.username;
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};



exports.ghUserModule = User;
