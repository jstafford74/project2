// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
const repos = [];
const logins = [];
const scores = [];
const create = [];
const update = [];
const sizes = [];
const langs = [];
const homes = [];


function iterAte(response) {
  var length = response.data.items.length;
  var itms = response.data.items;
  console.log(itms);
  for (i = 0; i < length; i++) {


    logins.push(itms[i].owner.login);
    scores.push(itms[i].score);
    create.push(itms[i].created_at);
    update.push(itms[i].updated_at);
    sizes.push(itms[i].size);
    langs.push(itms[i].language);
    homes.push(itms[i].homepage);

  }
};

// var proj key = ${search-term}
const projkey = "Giftastic";
// Then run a request with axios to the OMDB API with the movie specified
async function callApi() {
  let j = 1;
  for (j = 1; j <= 8; j++) {
    let ans;
    try {
      if (j == 1) {
        ans = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j);
        // var tcount = response.total_count;
        // $(".total_count").text("# Repos: " + tcount);

      }
      else {
        ans = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
      }
      iterAte(ans);
    } catch (error) { console.log(error); }
  }

};

callApi();
console.log(logins);
