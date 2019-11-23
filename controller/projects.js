const express = require("express");
const Proj = require("../models/proj.js");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("route hit:  /");
  res.send("route hit:  /");
  Proj.findAll().then(
    res.render("index", {
      proj: data
    })
  );
});

module.exports = router;
