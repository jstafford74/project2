// Get references to page elements
var $starRepo = $(".far.fa-star");
var $unstarRepo = $(".fas.fa-star");
var $repoList = $("#repo-list");

const func = (index) => console.log(index)

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

// handleStarRepo is called whenever we submit a new repo
// Save the new repo to the db and refresh the list
var handleStarRepo = function(event, index) {
  event.preventDefault();
  console.log(typeof event.srcElement.className, event.srcElement.className)
  const tableRow = event.srcElement.parentNode.parentNode.childNodes
  for(let i = 0; i < tableRow.length; i++) {
    console.log(tableRow[i].innerText)
  }
  if(event.srcElement.className.includes('far')) {
    $(`#star-${index}`).removeClass("far");
    $(`#star-${index}`).addClass("fas");
    var repo = {
      appId: index,
      htmlURL: tableRow[0].innerText,
      ownerLogin: tableRow[1].innerText,
      updateAt: tableRow[2].innerText,
    };
  
    API.starRepo(repo).then(function() {
    });
  } else {
    console.log("Unstar button clicked!");
    $(`#star-${index}`).removeClass("fas");
    $(`#star-${index}`).addClass("far");
  
    var idToDelete = index;
    console.log("index: ", index);
  
    API.unstarRepo(idToDelete).then(function() {
    });
  }
    
}

