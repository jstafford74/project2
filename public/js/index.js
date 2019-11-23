// var logRepos = require("../../routes/apicall_new.js");
var $submitProject = $("#submit-project");

$submitProject.on("click", function(event) {
  event.preventDefault();
  searchitem = $("#search-term")
    .val()
    .trim();
  console.log(searchitem);
});

// NJIB added the following code, to populate response results
function renderRepoTable(logRepos) {

  // Store everything into a variable.
  let repoName = logRepos.itms[0].repoName;
  let ownerLogin = logRepos.itms[0].owner.name;
  let updateDt = logRepos.itms[0].updated_at;
  let htmlURL = logRepos.itms[0].homepage;
  let starRepo = "<i class='icon-star-empty'></i>";

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td class='repoName0'>").text(repoName),
    $("<td class='ownerLogin0'>").text(ownerLogin),
    $("<td class='updateDt0'>").text(updateDt),
    $("<td class = 'htmlURL0'>").text(htmlURL),
    $("<td class = 'starRepo0'>").innerHTML(starRepo)
  );

  // Append the new row to the table
  $("#repo-table > tbody").append(newRow);
};


  //Input Validation//
  if (searchitem === "") {
    var inputError = $("<p>")
      .addClass("text-white")
      .text("Please enter a search term");
    $("#inputError").html(inputError);
  }

  displayResults();
});

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
