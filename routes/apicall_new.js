// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
var db = require("../models");
var axios = require("axios");
var logRepos = require("./apicall.js");

function repoIterate(response) {
  var length = response.data.items.length;
  var itms = response.data.items;
  for (var i = 0; i < length; i++) {
    logRepos[i].projkey.login = itms[i].owner.login;
    logRepos[i].projkey.name = itms[i].name;
    logRepos[i].projkey.score = itms[i].score;
    logRepos[i].projkey.createDate = itms[i].created_at;
    logRepos[i].projkey.lastUpdate = itms[i].updated_at;
    logRepos[i].projkey.size = itms[i].size;
    logRepos[i].projkey.lang = itms[i].language;
    logRepos[i].projkey.forksCount = itms[i].forks;
    logRepos[i].projkey.homepage = itms[i].homepage;
  }
  console.log(`Repos: ${logRepos}`);
}

//--------------- async function to search Repos by project name ----------------//
let repoCount = 0;
async function getRepos() {
  if (repoCount === logRepos.length) {
    db.Repos.bulkCreate(logRepos);
    return;
  }

  for (var j = 0; j <= parseInt(logRepos[repoCount].totalCount / 30); j++) {
    let repoSearchURL = logRepos[repoCount].searchUrl + "&page=" + j;
    if (j === 1) {
      ans = await axios.get(repoSearchURL);
    } else {
      let pager = repoSearchURL + "; rel='next'";
      ans = await axios.get(pager);
    }
    repoIterate(ans);
    repoCount++;
    setTimeout(getRepos, 8000);
  }
}

db.sequelize.sync().then(getRepos);

// let loggerCount = 0;
// async function getLoggers() {
//   if (loggerCount == logRepos.length) {
//     return;
//   }
//   let usr = logRepos[loggerCount].login;
//   const ans = await axios.get(loggerUrl + usr);
//   logRepos[loggerCount].publicRepos = ans.data.public_repos;
//   logRepos[loggerCount].followers = ans.data.followers;
//   logRepos[loggerCount].userCreateDate = ans.data.created_at;
//   logRepos[loggerCount].userLastUpdate = ans.data.updated_at;

//   console.log(`Logger Count: ${loggerCount},
//           ${logRepos[callCount].projkey}: ${logRepos[loggerCount].publicRepos},
//           ${logRepos[loggerCount].followers},${logRepos[loggerCount].followers},${logRepos[loggerCount].publicRepos},`);
//   callCount++;
//   setTimeout(getCount, 8000);

// try {
//   for (var k = 0; k < logRepos.length; k++) {
//     let usr = logRepos[k].login;
//     console.log("User = " + usr);
//     ans = await axios.get("https://api.github.com/users/" + usr);
//     console.log("Data: " + ans);

//     logRepos[k].publicRepos = ans.data.public_repos;
//     logRepos[k].followers = ans.data.followers;
//     logRepos[k].userCreateDate = ans.data.created_at;
//     logRepos[k].userLastUpdate = ans.data.updated_at;
//   }
// } catch (error) {
//   console.log("Error in loggers: " + error);
// }
// console.log(logRepos.length);
// }

// callApi();
// module.exports = logRepos;
