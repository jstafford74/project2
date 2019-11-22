// var logRepos = require("../../routes/apicall_new.js");
var $submitProject = $("#submit-project");

$submitProject.on("click", function(event) {
  event.preventDefault();
  searchitem = $("#search-term")
    .val()
    .trim();
  console.log(searchitem);
  console.log(logRepos);
});
