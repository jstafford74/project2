// Creating table structured for saved repos
// models/logins.js --> 'Logins' is the sequelized version of repoMasta object
// defined in ***Fill this in later

module.exports = function(sequelize, DataTypes) {
  var Repos = sequelize.define("Repos", {
    projkey: DataTypes.STRING,
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    type: DataTypes.STRING,
    forks: DataTypes.INTEGER,
    score: DataTypes.DECIMAL,
    createdAt: DataTypes.DATEONLY,
    lastUpdate: DataTypes.DATEONLY,
    lang: DataTypes.STRING,
    home: DataTypes.STRING
  });
  return Repos;
};
