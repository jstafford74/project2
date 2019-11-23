// When the page loads, grab and display all of our past projects
$.get("/").then(data => data.forEach(printProj));

const printProj = function(it) {
  const row = $("<div>");
  row.addClass("proj");

  row.append("<p>" + it.projkey + " </p>");
  row.append("<p>" + it.totalCount + "</p>");
  $("#proj-area").prepend(row);
};

var $submitProject = $("#submit-project");

$submitProject.on("click", function(event) {
  event.preventDefault();
  searchitem = $("#search-term")
    .val()
    .trim();
  console.log(searchitem);
});

var $submitTopic = $("#submit-topic");

$submitTopic.on("click", function(event) {
  event.preventDefault();
  searchitem = $("#search-term")
    .val()
    .trim();
  console.log(searchitem);
});
