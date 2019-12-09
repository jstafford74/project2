// var db = require("../models");
const path = require("path");
module.exports = function(app) {
  // Load index page
  // app.get("/", async (req, res) => {
  //   try {
  //     // const dbExamples = await db.Example.findAll({});
  //     res.render("index.html");
  //   } catch (error) {
  //     res
  //       .status(400)
  //       .render("400", { error: { name: error.name, msg: error.message } });
  //   }
  // });

  app.get("/", function(req, res) {
    res.sendFile(path.join("public", "index.html"));
  });

  // app.get("/api/projs", function(req, res) {
  //   res.sendFile(path.join("public", "BootcampSearch.html"));
  // });

  // // Load example page and pass in an example by id
  // app.get("/result/:id", async (req, res) => {
  //   try {
  //     const dbResult = await db.repomaster_db.findOne({
  //       where: { id: req.params.id }
  //     });
  //     res.render("result", {
  //       result: dbResult
  //     });
  //   } catch (error) {
  //     res
  //       .status(400)
  //       .render("400", { error: { name: error.name, msg: error.message } });
  //   }
  // });
};
