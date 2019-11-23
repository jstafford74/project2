// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// This seeds the databse and only needs to be run once...
require("dotenv").config();
var axios = require("axios");
var db = require("../models");
var logRepos = require("./getUrls.js");

let callCount = 0;
async function getCount() {
  if (callCount === logRepos.length) {
    db.Proj.bulkCreate(logRepos);
    return;
  }

  const ans = await axios.get(logRepos[callCount].searchUrl);
  logRepos[callCount].totalCount = ans.data.total_count;

  console.log(`Call Count: ${callCount},
          ${logRepos[callCount].projkey}: ${logRepos[callCount].totalCount}`);
  callCount++;
  setTimeout(getCount, 6100);
}

// db.sequelize.sync().then(getCount);

module.export = getCount();
