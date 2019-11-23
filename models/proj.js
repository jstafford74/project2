// Creates a "Proj" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Proj = sequelize.define("Proj", {
    projkey: DataTypes.STRING,
    searchUrl: DataTypes.STRING,
    totalCount: DataTypes.BIGINT
  });
  return Proj;
};
