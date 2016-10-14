var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getUser = function(displayNameSuccess, displayNameFailure) {
  var username = this.username;
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    displayNameSuccess(username, response.name);
  }).fail(function(error) {
    displayNameFailure(username, error.responseJSON.message);
  });
};

User.prototype.getRepos = function(displayRepos) {
  var username = this.username;
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {

    for (var i = 0; i < response.length; i++) {
      if (response[i].description === null) {
        displayRepos(response[i].full_name, "No Description Given", response[i].git_url);
      } else {
        displayRepos(response[i].full_name, response[i].description, response[i].git_url);
      }
    }
  }).fail(function(error) {
    console.log(response);
  });
};



exports.ghUserModule = User;
