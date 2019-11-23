// var moment = require('moment');

// var logRepos = require("../../routes/apicall_new.js");
var $submitProject = $("#submit-project");

$submitProject.on("click", function(event) {
  event.preventDefault();
  searchitem = $("#search-term")
    .val()
    .trim();
  console.log(searchitem);

  //Input Validation//
  if (searchitem === "") {
    var inputError = $("<p>")
      .addClass("text-white")
      .text("Please enter a search term");
    $("#inputError").html(inputError);
  }

  displayResults();
});

//Function to Display Search Results//
function displayResults() {
  var queryURL = "https://api.github.com/search/repositories?q=" + searchitem;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("-----RESULTS-------------");
    var repoName = response.items[0].name;
    var repoOwner = response.items[0].owner.login;
    var repoURL = response.items[0].queryURL;
    var updateDate = response.items[0].updated_at;
    // var updateDate = moment(response.items[0].updated_at).format("MMM Do YY");

    var resultsdiv = $("<div>");

    var pRepo = $("<h2>").append("name: " + repoName);
    var pOwner = $("<h2>").append("owner: " + repoOwner);
    var pRepoURL = $("<h2>").append("url: " + repoURL);
    var pUpdateDate = $("<h2>").append("url: " + updateDate);

    resultsdiv.append(pRepo);
    resultsdiv.append(pOwner);
    resultsdiv.append(pRepoURL);
    resultsdiv.append(pUpdateDate);

    $("#resultstest").append(resultsdiv);
  });
}
