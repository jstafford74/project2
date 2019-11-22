// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
/*
var axios = require("axios");

const {
  setIntervalAsync,
  clearIntervalAsync
} = require("set-interval-async/dynamic");
*/
const projkey = [
  "HW-Wireframe",
  "Basic-Portfolio",
  "Bootstrap-Portfolio",
  "Responsive-Portfolio",
  "Word Guess Game",
  "Psychic-Game",
  "unit-4-game",
  "TriviaGame",
  "GifTastic",
  "RPS-Multiplayer",
  "Train Scheduler",
  "TrainTime_Basic",
  "LIRI Bot",
  "Constructor Word Guess",
  "bamazon",
  "Friend Finder",
  "burger",
  "sequelizedBurger"
];

//const logRepos2 = [];
let baseUrl = "https://api.github.com/search/repositories?q=";
const searchUrl = [];
/*
function Repo2(proj, url) {
  this.proj = proj;
  this.url = url;
}
*/
function getUrls() {
  projkey.forEach(proj => searchUrl.push(baseUrl + proj));
  console.log(searchUrl);
}
//     var repObj = new Repo2(projkey[a], repoSearchURL);
//     logRepos2.push(repObj);

//     await sleep(EXECUTION_TIME_MS);
//     console.log(`${projkey[a]}`);
//     a++;
//   }, INTERVAL_MS);

//   setTimeout(async () => {
//     await clearIntervalAsync(timer);
//     console.log(logRepos2);
//   }, EXAMPLE_DURATION_SEC * 1000);

//   async function sleep(milliseconds) {
//     await new Promise(resolve => {
//       setTimeout(resolve, milliseconds);
//     });
//   }
//   return logRepos2;
// }

module.exports = getUrls;
