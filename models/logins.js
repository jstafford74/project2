//Creating table structured for saved repos

module.exports = function(sequelize, DataTypes) {
  var Logins = sequelize.define("Logins", {
    login: DataTypes.STRING
  });
  return Logins;
};
