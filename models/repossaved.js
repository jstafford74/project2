//Creating table structured for saved repos

module.exports = function(sequelize, DataTypes) {
  var Repo = sequelize.define("SavedRepo", {
    appId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    htmlUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATEONLY,
    ownerLogin: DataTypes.STRING,
    saverId: DataTypes.BIGINT
  });
  return Repo;
};
