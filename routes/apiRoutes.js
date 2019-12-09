var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function(app) {
  // Get all repos
  app.get("/api/repos", async (req, res) => {
    try {
      const data = await db.SavedRepo.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new example
  app.post("/api/repos", async (req, res) => {
    try {
      // const result = await db.SavedRepo.create(req.body);
      const result = await db.SavedRepo.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an example by id
  app.delete("/api/repos/:id", async (req, res) => {
    try {
      const result = await db.SavedRepo.destroy({
        where: { id: req.params.id }
      });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/projs", async (req, res) => {
    const proj = await db.Proj.findAll();
    res.json(proj);
  });

  app.get("/api/projs/:id?", async (req, res) => {
    try {
      const results = await db.Repos.findAll({
        where: {
          projkey: req.params.id
        }
      });
      res.json(results);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/forks", async (req, res) => {
    try {
      const fors = await db.Repos.findAll({
        attributes: [
          "projkey",
          [db.sequelize.fn("AVG", db.sequelize.col("forks")), "avgForks"]
        ],
        group: ["projkey"]
      });
      res.json(fors);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/scores", async (req, res) => {
    try {
      const scors = await db.Repos.findAll({
        attributes: [
          "projkey",
          [db.sequelize.fn("AVG", db.sequelize.col("score")), "avgScore"]
        ],
        group: ["projkey"]
      });
      res.json(scors);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/logins/repomasters", async (req, res) => {
    try {
      // console.log(db);
      const results = await db.Repos.sequelize.query(
        "SELECT login, COUNT(*) AS 'no_repos'FROM repos GROUP BY login ORDER BY no_repos DESC LIMIT 10;"
      );

      res.json(results);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/types/tc", async (req, res) => {
    try {
      // console.log(db);
      const results = await db.Repos.findAll({
        attributes: [
          "type",
          [db.sequelize.fn("COUNT", db.sequelize.col("type")), "allTypes"]
        ],
        group: ["type"]
      });

      res.json(results);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/langs/:id?", async (req, res) => {
    try {
      // console.log(db);
      const results = await db.Repos.findAll({
        attributes: [
          "projkey",
          "lang",
          [db.sequelize.fn("COUNT", db.sequelize.col("lang")), "langs"]
        ],
        where: {
          projkey: req.params.id,
          lang: {
            [Op.ne]: null
          }
        },
        group: ["projkey", "lang"]
      });

      res.json(results);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  app.get("/api/repomaster/table", async (req, res) => {
    try {
      // console.log(db);
      const results = await db.Repos.sequelize.query(
        "SELECT *,COUNT(repos.projkey) pkeys,AVG(repos.forks) a_fork, AVG(repos.score) a_scor FROM repos LEFT JOIN users ON users.login = repos.login GROUP BY repos.login ORDER BY followers DESC LIMIT 10"
      );
      res.json(results);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
