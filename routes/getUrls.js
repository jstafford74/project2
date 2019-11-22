// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
<<<<<<< HEAD

=======
/*
var axios = require("axios");

const {
  setIntervalAsync,
  clearIntervalAsync
} = require("set-interval-async/dynamic");
*/
>>>>>>> 56676920c10abd61cd2b12a5a8b0f5c8121b3ec8
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

<<<<<<< HEAD
let baseUrl = "https://api.github.com/search/repositories?q=";
const searchUrl = [];
const logRepos = [];

function Project(projkey, searchUrl) {
  this.projkey = projkey;
  this.searchUrl = searchUrl;
}

function projCreate() {
=======
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
>>>>>>> 56676920c10abd61cd2b12a5a8b0f5c8121b3ec8
  projkey.forEach(proj => searchUrl.push(baseUrl + proj));
  for (i = 0; i < projkey.length; i++) {
    const repper = new Project(projkey[i], searchUrl[i]);
    logRepos.push(repper);
  }
}

projCreate();
console.log(logRepos);
module.exports = projCreate;
