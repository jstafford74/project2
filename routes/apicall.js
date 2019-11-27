// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// This seeds the databse and only needs to be run once...
require("dotenv").config();
var axios = require("axios");
var db = require("../models");
var logRepos = require("./getUrls.js");

let callCount = 0;

let projCount = 0;

const loggers = [];
async function getCount() {
  if (callCount === logRepos.length) {
    db.Proj.bulkCreate(logRepos);
    getLogins();
    return;
  }

  const ans = await axios.get(logRepos[callCount].searchUrl);
  logRepos[callCount].totalCount = ans.data.total_count;

  console.log(`Call Count: ${callCount},
          ${logRepos[callCount].projkey}: ${logRepos[callCount].totalCount}`);
  callCount++;
  setTimeout(getCount, 6100);
}

async function getLogins() {
  let pageCount = 1;
  try {
    let count;
    do {
      if (pageCount < 8) {
        count = true;
      } else {
        count = false;
      }
      const ans = await axios.get(
        logRepos[projCount].searchUrl + "&page=" + pageCount + ";"
      );
      console.log(`${logRepos[projCount].projkey}: Page ${pageCount}`);
      for (var k = 0; k < ans.data.items.length; k++) {
        loggers.push({ login: ans.data.items[k].owner.login });
      }
      setTimeout(() => {
        pageCount++;
      }, 6100);
    } while (count);
  } catch (error) {
    console.log("error in logins");
  }
  projCount++;
  setTimeout(getLogins, 6100);
}
// logger.login = ans.data.login;
// loggerRepo.name = ans.data.name;
// loggerRepo.score = ans.data.score;
// loggerRepo.createDate = ans.data.created_at;
// loggerRepo.updatedAt = ans.data.updated_at;
// loggerRepo.followers = ans.data.followers;

module.export = getCount();
