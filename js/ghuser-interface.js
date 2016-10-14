var User = require('./../js/ghuser.js').ghUserModule;

var displayNameSuccess = function(username, name) {
  $('#results').html('<h4>GitHub Repositories for ' + name + '</h4>');
  };

var displayNameFailure = function(username, message) {
  $('#results').html('<h4>Sorry, ' + username + ' is ' + message + '</h4>');
  };

var displayRepos = function(full_name, description, git_url) {
  $('#results-data').append(
        "<tr>" +
          "<td>" + full_name + "</td>" +
          "<td>" + description + "</td>" +
          "<td>" + git_url + "</td>" +
        "</tr>"
    );
  };

$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('#search-github').val();
    var newUser = new User(username);
    newUser.getUser(displayNameSuccess, displayNameFailure);
    newUser.getRepos(displayRepos);
    $('#results-table').show();



  });



});
