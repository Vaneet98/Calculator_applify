let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("applicationTypes", {
		...require("./core")(Sequelize, DataTypes),
		name: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: "applicationTypes",
		timestamps: true,
		//paranoid: true,
		deletedAt: 'destroyTime'
	});
};