module.exports = function(sequelize, DataTypes) {
  var Repomaster = sequelize.define("Repomaster", {
    app_id: DataTypes.BIGINT,
    html_url: DataTypes.STRING,
    description: DataTypes.STRING,
    updated_at: DataTypes.DATEONLY,
    created_at: DataTypes.DATEONLY,
    language: DataTypes.STRING,
    forks_count: DataTypes.SMALLINT,
    score: DataTypes.FLOAT,
    owner_id: DataTypes.BIGINT,
    owner_login: DataTypes.STRING,
    owner_avatar_url: DataTypes.STRING,
    owner_url: DataTypes.STRING,
  });
  return Repomaster;
};
