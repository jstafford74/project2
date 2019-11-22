var db = require("../models");

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
      const result = await db.SavedRepo.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
