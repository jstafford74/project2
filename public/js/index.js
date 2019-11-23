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
// End of NJIB code