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
