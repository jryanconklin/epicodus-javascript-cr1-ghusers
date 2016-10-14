var User = require('./../js/ghuser.js').ghUserModule;

var displaySuccess = function(name, id) {
  $('#results').html('<p>The id for ' + name + ' is ' + id + '</p>');
};

var displayFailure = function(name, message) {
  $('#results').html('<p>Sorry, ' + name + ' is ' + message + '</p>');
};


$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('#search-github').val();
    var newUser = new User(username);

    newUser.getRepos(displaySuccess, displayFailure);



  });



});
