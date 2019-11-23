// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
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

function projCreate() {
  projkey.forEach(proj => searchUrl.push(baseUrl + proj));

  for (i = 0; i < projkey.length; i++) {
    logRepos.push({ projkey: projkey[i], searchUrl: searchUrl[i] });
  }

  return logRepos;
}

module.exports = projCreate();
