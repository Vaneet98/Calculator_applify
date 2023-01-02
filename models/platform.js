let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("platform", {
		...require("./core")(Sequelize, DataTypes),
		name: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: "platform",
		timestamps: true,
	//	paranoid: true,
		deletedAt: 'destroyTime'
	});
};