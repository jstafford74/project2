module.exports = function(app, db) {
  // Get all examples
  app.get("/", async (req, res) => {
    try {
      const data = await db.Proj.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
