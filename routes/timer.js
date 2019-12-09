require("dotenv").config();
var axios = require("axios");
var Promise = require("bluebird");
var _ = require("lodash");
var db = require("../models");

// Ultimate object should look like:
// ----- [
//        {
//          projkey: xyz
//                  { repo_name:
//                    login:
//                    ownerType:
//                    forks:
//                    score:
//                    createdAt:
//                    updateAt:
//                    }
//        }
//       ]

//-----This initializes the repository object-----//
const repoMasta = []; //-----This initializes the user object-----//

//-----Query Base Urls Declared-----//
let baseUrl = "https://api.github.com/search/repositories?q=";
let base2Url = "https://api.github.com/users/";

//-----Global User Login Array kept for Data Analysis
const loginz = [];
const px = [];
const tCounts = [];
const ownertypes = [];
const names = [];
const locations = [];
const createdAt = [];
const updatedAt = [];
const loginUrls = [];
//-----Large Async/Await setTimeout Promise That Caches the Queries Within the 10/minute rate limit-----//

//----- Intialize logRepos Array of Objects -----//
const logRepos = [];
const projk = [];
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
  "LIRI Bot",
  "Constructor Word Guess",
  "bamazon",
  "Friend Finder",
  "burger",
  "sequelizedBurger"
];

projkey.forEach(proj => {
  projk.push({
    projkey: proj
  });
});

Promise.delay(500)
  .then(function() {
    let searchUrl;
    // This loops through all the given project
    // keys and creates an array of repository
    // search urls. For testing purposes I set
    // k = 2, but for 'production' k should = 8

    for (j = 0; j < projkey.length; j++) {
      const searchUrls = [];
      for (k = 1; k < 4; k++) {
        searchUrl =
          baseUrl +
          projkey[j] +
          "&page=" +
          k +
          "&per_page=100&client_id=91359a01423db1c5cbb8&client_secret=b399a96e7050f3abd92f05ec32ef2d8c64734ef5";
        searchUrls.push(searchUrl);
      }
      // logRepos[j].searchUrl = searchUrls[0];
      projk[j].searchUrl = searchUrls[0];
      projk[j].searchUrls = searchUrls;
    }
  })
  .then(async function() {
    // This is the beginning of a nested loop
    for (i = 0; i < projk.length; i++) {
      for (m = 0; m < projk[i].searchUrls.length; m++) {
        // const logRepo = [];
        console.log(`${projk[i].projkey}: Page = ${m}`);
        await delay(7500);
        const ans = await axios.get(projk[i].searchUrls[m]);

        tCounts.push(ans.data.total_count);
        // logRepos[i].totalCount = ans.data.total_count;
        projk[i].totalCount = ans.data.total_count;
        var tCounts2 = _.uniq(tCounts);
        ans.data.items.forEach(it => {
          var rp = new Repo(
            projk[i].projkey,
            it.name,
            it.owner.login,
            it.owner.type,
            it.forks,
            it.score,
            it.created_at,
            it.updated_at,
            it.language,
            it.html_url
          );
          logRepos.push(rp);
          loginz.push(it.owner.login);
          ownertypes.push(it.owner.type);
        });
        // logRepos[i].repos = logRepo;
      }
    }

    const tbl1 = _.zipObject(projkey, tCounts2);

    console.log(tbl1);
    // as new properties for the existing logRepos object
    db.Proj.bulkCreate(projk);
    db.Repos.bulkCreate(logRepos);
    return logRepos; // A promise can ony return one item, in this case it is logRepos
  })
  .then(() => {
    px.push(_.uniq(loginz));

    px[0].forEach(logr => {
      let loggrUrl = base2Url + logr;
      loginUrls.push(loggrUrl);
    });
  })
  .then(async () => {
    for (p = 0; p < 60; p++) {
      await delay(7500);
      const ans = await axios.get(loginUrls[p]);
      let it = ans.data;
      console.log(it);
      var rm = new RepoMasta(
        it.login,
        loginUrls[p],
        it.name,
        it.location,
        it.public_repos,
        it.type,
        it.followers,
        it.created_at,
        it.updated_at
      );

      repoMasta.push(rm);
      if (it.name !== null) {
        names.push(it.name);
      }
      if (it.location !== null) {
        locations.push(it.location);
      }
      if (it.created_at !== null) {
        createdAt.push(it.created_at);
      }

      if (it.updated_at !== null) {
        updatedAt.push(it.updated_at);
      }

      console.log(`P: ${p}`);
    }

    db.Users.bulkCreate(repoMasta);
    return repoMasta;
  });

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function arrRedoose(arr) {
//   return arr.filter(function(item, index) {
//     return arr.indexOf(item) >= index;
//   });
// }

function Repo(
  projkey,
  name,
  login,
  type,
  forks,
  score,
  createdAt,
  lastUpdate,
  lang,
  home
) {
  this.projkey = projkey;
  this.name = name;
  this.login = login;
  this.type = type;
  this.forks = forks;
  this.score = score;
  this.createdAt = createdAt;
  this.lastUpdate = lastUpdate;
  this.lang = lang;
  this.home = home;
}

function RepoMasta(
  login,
  userUrl,
  name,
  location,
  pubRepos,
  type,
  followers,
  createdAt,
  lastUpdate
) {
  this.login = login;
  this.userUrl = userUrl;
  this.name = name;
  this.location = location;
  this.pubRepos = pubRepos;
  this.type = type;
  this.followers = followers;
  this.createdAt = createdAt;
  this.lastUpdate = lastUpdate;
}
