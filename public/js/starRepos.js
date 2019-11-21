// Get references to page elements
// var $exampleText = $("#repo-text");
// var $exampleDescription = $("#repo-description");
var $starRepo = $(".star");
// var $exampleList = $("#repo-list");

// The API object contains methods for each kind of request we'll make
var API = {
  starRepo: function(repo) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/repos",
      data: JSON.stringify(repo)
    });
  },
  getRepos: function() {
    return $.ajax({
      url: "api/repos",
      type: "GET"
    });
  },
  unstarRepo: function(id) {
    return $.ajax({
      url: "api/repos/" + id,
      type: "DELETE"
    });
  }
};

// refreshRepos gets new repos from the db and repopulates the list
var refreshRepos = function() {
  API.getRepos().then(function(data) {
    var $repos = data.map(function(repo) {
      var $a = $("<a>")
        .text(repo.text)
        .attr("href", "/repo/" + repo.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": repo.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($repos);
  });
};

// handleFormSubmit is called whenever we submit a new repo
// Save the new repo to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var repo = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(repo.text && repo.description)) {
    alert("You must enter an repo text and description!");
    return;
  }

  API.starRepo(repo).then(function() {
    refreshRepos();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an repo's delete button is clicked
// Remove the repo from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.unstarRepo(idToDelete).then(function() {
    refreshRepos();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
