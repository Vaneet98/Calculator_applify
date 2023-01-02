let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("userCategories", {
		...require("./core")(Sequelize, DataTypes),
		category: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        platform: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		isApproved: {
			type: DataTypes.INTEGER,
			default: 0
		},
	}, {
		tableName: "userCategories",
		timestamps: true,
		//paranoid: true,
		deletedAt: 'destroyTime'
	});
};