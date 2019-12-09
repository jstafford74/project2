//Creating table structured for saved repos

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    login: DataTypes.STRING,
    userUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    pubRepos: DataTypes.INTEGER,
    type: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    createdAt: DataTypes.DATEONLY,
    lastUpdate: DataTypes.DATEONLY
  });
  return Users;
};
