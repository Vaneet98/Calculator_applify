var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;
module.exports = {
  users: require("./users")(Sequelize, sequelize, Sequelize.DataTypes),
  platform: require("./platform")(Sequelize, sequelize, Sequelize.DataTypes),
  applicationTypes: require("./applicationTypes")(Sequelize, sequelize, Sequelize.DataTypes),
  categories: require("./categories")(Sequelize, sequelize, Sequelize.DataTypes),
  userCategories: require("./userCategories")(Sequelize, sequelize, Sequelize.DataTypes),
  categoryHours: require("./categoryHours")(Sequelize, sequelize, Sequelize.DataTypes)
};