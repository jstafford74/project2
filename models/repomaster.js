//Creating table structured for saved repos

module.exports = function(sequelize, DataTypes) {
  var Repos = sequelize.define("Repos", {
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    createDate: DataTypes.DATEONLY,
    lastUpdate: DataTypes.DATEONLY,
    size: DataTypes.INTEGER,
    lang: DataTypes.STRING,
    forks: DataTypes.INTEGER,
    homepage: DataTypes.STRING
  });
  return Repos;
};
