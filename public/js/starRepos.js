// Get references to page elements
var $starRepo = $(".icon-star-empty");
var $unstarRepo = $(".fas.fa-star");
var $repoList = $("#repo-list");

// var $repoName = $("#repo-name");
// var $repoURL = $("#repo-URL");
// var $repoOwner = $("#repo-owner");
// var $repoLastUpdate = $("#repo-last-update");
// var $repoFollowers = $("#repo-followers");

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

    $repoList.empty();
    $repoList.append($repos);
  });
};

// handleStarRepo is called whenever we submit a new repo
// Save the new repo to the db and refresh the list
var handleStarRepo = function(event) {
  event.preventDefault();

  // $("i").click(function(){
  //   alert($("i").hasClass(".icon-star-empty"));
  //   console.log($("i").hasClass(".icon-star-empty"));
  // });

  //Save the starred repo to the database
  console.log("Star button clicked!");

  $(".icon-star-empty").toggleClass("fas fa-star");
  // $('.fas.fa-star').removeClass("icon-star-empty");

  let rndmAppId = (Math.random() * 1000000);

  var repo = {
    appId: rndmAppId,
    htmlURL: "test2_url",
    ownerLogin: "Rachael",
    updateAt: "dfgl'ndfkg,fngkfl"
  };

  if (!repo.appId) {
    // if (!(repo.text && repo.description)) {
    alert("No repo ID logged!");
    return;
  }

  API.starRepo(repo).then(function() {
    refreshRepos();
  });
};

// handleDeleteBtnClick is called when an repo's delete button is clicked
// Remove the repo from the db and refresh the list
var handleUnstarRepo = function() {

  console.log("Unstar button clicked!");
  $(".fas.fa-star").toggleClass("icon-star-empty");

  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.unstarRepo(idToDelete).then(function() {
    refreshRepos();
  });
};

// Add event listeners to the submit and delete buttons
$starRepo.on("click", handleStarRepo);
$unstarRepo.on("click", handleUnstarRepo);
$repoList.on("click", ".delete", handleUnstarRepo);
