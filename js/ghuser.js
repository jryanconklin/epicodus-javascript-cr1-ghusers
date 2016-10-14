var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getUser = function() {
  var username = this.username;
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(response);
  });
};

User.prototype.getRepos = function() {
  var username = this.username;
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {

    console.log(response);

    for (var i = 0; i < response.length; i++) {
      console.log(response[i].description);
    }

  }).fail(function(error) {
    console.log(response);
  });
};



exports.ghUserModule = User;
