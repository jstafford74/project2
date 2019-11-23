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

  displayResults(searchitem);
});

//Function to Display Search Results//
function displayResults() {
  var queryURL =
    "https://api.github.com/search/repositories?q=" +
    searchitem +
    "+sort:stars&forks";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#repo-table tr>td").remove();
    console.log("-----RESULTS-------------");
    for (var loop = 0; loop < response.items.length; loop++) {
      var repoName = response.items[loop].name;
      var repoOwner = response.items[loop].owner.login;
      var repoURL = response.items[loop].html_url;
      var updateDate = response.items[loop].updated_at;
      updateDate = updateDate.substring(0, 10);
      var score = response.items[loop].score;
      var followers = response.items[loop].watchers_count;
      var newColumn;
      var $newRow = $("<tr>");
      newColumn =
        "<td><a href='" +
        repoURL +
        "' target='_blank'>" +
        repoName +
        "</a></td>";
      $newRow.append(newColumn);
      newColumn = "<td>" + repoOwner + "</td>";
      $newRow.append(newColumn);
      newColumn = "<td>" + updateDate + "</td>";
      $newRow.append(newColumn);
      newColumn = "<td>" + Math.ceil(score) + "</td>";
      $newRow.append(newColumn);
      newColumn = "<td>" + followers + "</td>";
      $newRow.append(newColumn);
      newColumn = "<td><i class='icon-star-empty'></i></td>";
      $newRow.append(newColumn);
      $("#repo-table").append($newRow);
    }
  });
}

// eslint-disable-next-line no-unused-vars
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("repo-table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
