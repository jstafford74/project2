require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

// var repoMaster = require("./routes");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// --------------Route functions-----------------//
// ----------------IMPORTANT---------------------//
//--------------routes/apicall.js seeds db-------//
//  Run apicall.js once, then comment out below  //

//  >>>>>  //

// <<<<<  //

require("./routes/apicall.js");
require("./routes/getUrls.js");

//--ignore this file for now >>>> require("./routes/apicall_new.js");--//
require("./routes/apiRoutes.js")(app);
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
