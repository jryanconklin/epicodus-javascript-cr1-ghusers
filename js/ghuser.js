var apiKey = require('./../.env').apiKey;

function User(name) {
  this.username = name;
}

User.prototype.getRepos = function(displaySuccess, displayFailure) {
  var name = this.username;

  if (apiKey !== 'YOUR-API-KEY') {
    var githubKey = $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
      displaySuccess(name, response.id);
    }).fail(function(error){
      console.log(githubKey);
      displayFailure(name, error.responseJSON.message);
    });
  } else {
    var githubNoKey = $.get('https://api.github.com/users/' + name).then(function(response){
      console.log(githubNoKey);
      displaySuccess(name, response.id);
    }).fail(function(error){
      displayFailure(name, error.responseJSON.message);
    });
  }
};



exports.ghUserModule = User;
