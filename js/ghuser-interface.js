var User = require('./../js/ghuser.js').ghUserModule;

// var displaySuccess = function(username, name, url) {
//   $('#results').html('<p>The name for ' + username + ' is ' + name + '</p>');
//
//   $('#results').html("<table class='table table-bordered'>" +
//     "<thead class='inverse'>" +
//     "<p>" + name + "</p>" + "<tr>" +
//     "<th>Reposoitory</th>" + "</tr>" + "</thead>" +
//     "<tbody>" +
//     "<tr>" +
//     "<td>" + url + "</td>" + "</tr>" + "</tbody>" + "</table>"
//     );
//   };
//
// var displayFailure = function(name) {
//   $('#results').html('<p>Sorry, ' + name + ' is ' + 'message' + '</p>');
// };


$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('#search-github').val();
    var newUser = new User(username);

    // newUser.getUser();
    newUser.getRepos();



  });



});
