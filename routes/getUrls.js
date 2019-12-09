// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
var axios = require("axios");
var axios = require("axios");
const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

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

let baseUrl = "https://api.github.com/search/repositories?q=";
const searchUrl = [];
const logRepos = [];
const totalCount = [];
const repoName =[];

    logins.push(it[0].owner.login);
    types.push(it[0].owner.type);
    forksCount.push(it[0].forks_count);
    lang.push(it[0].language);
    scores
function projCreate() {
  projkey.forEach(proj => searchUrl.push(baseUrl + proj));
  for (i = 0; i < projkey.length; i++) {
    const ans = fetchJson(searchUrl[i]).then(sleep(6100));
    totalCount.push(ans.data.total_count);
  }
  logRepos.push({
    projkey: projkey[i],
    searchUrl: searchUrl[i],
    totalCount: totalCount[i]
  });
  // return logRepos;
}

projCreate();
const repoJson = function(url){
  axios.get(url).then(response => response.data);
  logRepos.projkey.totalCount = response.data.total_count;
  response.data.items.forEach((it) => {
    repoName.push(it[0].name);
    logins.push(it[0].owner.login);
    types.push(it[0].owner.type);
    forksCount.push(it[0].forks_count);
    lang.push(it[0].language);
    scores.push(it[0].score);
  });


const sleep = milliseconds => value =>
  new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
