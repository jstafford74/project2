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

  // Render 404 page for any unmatched routes
  app.get("*", async (req, res) => {
    res.render("404");
  });
};
