// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

function iterAte(response) {
  var length = response.items.length;
  for (i = 0; i < length; i++) {

    var itms = response.items;

    logins.push(itms[i].owner.login);
    scores.push(itms[i].score);
    create.push(itms[i].created_at);
    update.push(itms[i].updated_at);
    sizes.push(itms[i].size);
    langs.push(itms[i].language);
    homes.push(itms[i].homepage);

  }
};

// Then run a request with axios to the OMDB API with the movie specified
async function callApi() {
  const j = 1;
  const ans1 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j)

  j++
  tcount = response.total_count;
  $(".total_count").text("# Repos: " + tcount);
  iterAte(ans1);
  const ans2 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans2);
  const ans3 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans3);
  const ans4 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans4);
  const ans5 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans5);
  const ans6 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans6);
  const ans7 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  j++
  iterAte(ans7);
  const ans8 = await axios.get("https://api.github.com/search/repositories?q=" + projkey + "&page=" + j + "; rel='next'");
  iterAte(ans8);
}
  
callApi();
    // .catch(function (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log("---------------Data---------------");
    //     console.log(error.response.data);
    //     console.log("---------------Status---------------");
    //     console.log(error.response.status);
    //     console.log("---------------Status---------------");
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", error.message);
    //   }
    //   console.log(error.config);
    // });
