// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
var axios = require("axios");

var getUrls = require("./getUrls.js");

const {
  setIntervalAsync,
  clearIntervalAsync
} = require("set-interval-async/dynamic");

async function getCount() {
  const logRepos = getUrls();
  console.log(logRepos);
  // const INTERVAL_MS = 8000;
  // const EXECUTION_TIME_MS = 1000;
  // const EXAMPLE_DURATION_SEC = logRepos.length * 8;
  // var b = 0;

  // const timer = setIntervalAsync(async () => {
  //   let ans = await axios.get(logRepos[b].url);
  //   var tCount = ans.data.total_count;
  //   logRepos[b].totalCount = tCount;
  //   console.log(`b: ${b},
  //         ${logRepos[b]}: ${tCount}`);

  //   await sleep(EXECUTION_TIME_MS);
  //   console.log("End async fn 1.");
  //   b++;
  // }, INTERVAL_MS);

  // setTimeout(async () => {
  //   await clearIntervalAsync(timer);
  //   console.log(logRepos);
  // }, EXAMPLE_DURATION_SEC * 1000);

  // async function sleep(milliseconds) {
  //   await new Promise(resolve => {
  //     setTimeout(resolve, milliseconds);
  //   });
  // }
  // return logRepos;
}

getCount();

// function getCount() {
//   var counter = 0;
//
//   const urls = setInterval(() => {
//     counter = counter + 2;
//     if (counter > projkey.length * 2) {
//       clearInterval(urls);
//       console.log("---------Done---------");
//       console.log("# of Projects: " + logRepos2.length);
//     } else {
//       console.log(`${a} : ${projkey[a]}`);
//
//     }
//   }, 2000);

//   return logRepos2;
// }

//     b++;
//   }, 10000);
// }
// getCount();
// awaitCount();

//--------------- async function to search Repos by project name ----------------//
// async function callApi() {
//   let j = 1;
//   //--starting with 2 pages of 30 entries--//
//   for (j = 1; j <= 2; j++) {
//     let ans;

//     try {
//       let repoSearchURL =
//         "https://api.github.com/search/repositories?q=" +
//         projkey +
//         "&page=" +
//         j;
//       if (j === 1) {
//         ans = await axios.get(repoSearchURL);
//       } else {
//         let pager = repoSearchURL + "; rel='next'";
//         ans = await axios.get(pager);
//       }
//       repoIterate(ans);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   try {
//     for (var k = 0; k < logRepos.length; k++) {
//       let usr = logRepos[k].login;
//       console.log("User = " + usr);
//       ans = await axios.get("https://api.github.com/users/" + usr);
//       console.log("Data: " + ans);

//       logRepos[k].publicRepos = ans.data.public_repos;
//       logRepos[k].followers = ans.data.followers;
//       logRepos[k].userCreateDate = ans.data.created_at;
//       logRepos[k].userLastUpdate = ans.data.updated_at;
//     }
//   } catch (error) {
//     console.log("Error in loggers");
//   }
//   // console.log(logRepos);
// }
// callApi();
// module.exports = logRepos;
