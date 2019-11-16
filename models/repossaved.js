module.exports = function(sequelize, DataTypes) {
  var ReposSaved = sequelize.define("SavedRepo", {
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
    ownerUrl: DataTypes.STRING,
    userComments: DataTypes.STRING,
    dateSaved: DataTypes.DATE,
    saverId: DataTypes.BIGINT
  });
  return ReposSaved;
};
