// Creating table structure for main API data pull

module.exports = function(sequelize, DataTypes) {
  var Repomaster = sequelize.define("FoundRepo", {
    appId: DataTypes.BIGINT,
    htmlUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    updatedAt: DataTypes.DATEONLY,
    createdAt: DataTypes.DATEONLY,
    language: DataTypes.STRING,
    forksCount: DataTypes.SMALLINT,
    score: DataTypes.FLOAT,
    ownerId: DataTypes.BIGINT,
    ownerLogin: DataTypes.STRING,
    ownerAvatarUrl: DataTypes.STRING,
    ownerUrl: DataTypes.STRING
  });
  return Repomaster;
};
