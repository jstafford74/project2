// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
require("dotenv").config();
// var logRepos = require("./getUrls.js");
var axios = require("axios");
const projkey = "giftastic";
const logRepos = [];
//contructor for repo object

function Repo(login, score, cDate, uDate, size, lang, home) {
  this.login = login;
  this.score = score;
  this.cDate = cDate;
  this.uDate = uDate;
  this.size = size;
  this.lang = lang;
  this.home = home;
}

function repoIterate(response) {
  var length = response.data.items.length;
  var itms = response.data.items;
  for (var i = 0; i < length; i++) {
    let varname = new Repo(
      itms[i].owner.login,
      itms[i].score,
      itms[i].created_at,
      itms[i].updated_at,
      itms[i].size,
      itms[i].language,
      itms[i].homepage
    );
    logRepos.push(varname);

    // NJIB inserted to call render function in index.js
    renderRepoTable(logRepos);
    // End of NJIB code insert
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
<<<<<<< HEAD

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
=======
  console.log(logRepos);
>>>>>>> 3fe28510903d6c88e3a7290671e2d920bae8ade0
}
//   try {
//     for (var k = 0; k < logRepos.length; k++) {
//       let usr = logRepos[k].login;
//       ans = await axios.get("https://api.github.com/users/" + usr);

//       logRepos[k].publicRepos = ans.data.public_repos;
//       logRepos[k].followers = ans.data.followers;
//       logRepos[k].userCreateDate = ans.data.created_at;
//       logRepos[k].userLastUpdate = ans.data.updated_at;
//     }
//   } catch (error) {
//     console.log("Error in loggers: " + error);
//   }
//   console.log(logRepos.length);
// }

<<<<<<< HEAD
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
=======
callApi();
>>>>>>> 3fe28510903d6c88e3a7290671e2d920bae8ade0
// module.exports = logRepos;
