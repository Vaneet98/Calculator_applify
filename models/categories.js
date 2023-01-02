let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("categories", {
		...require("./core")(Sequelize, DataTypes),
		categoryName: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		applicationTypeId: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		createdBy: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		isApproved: {
			type: DataTypes.INTEGER,
			default: 0
		},
	}, {
		tableName: "categories",
		timestamps: true,
		//paranoid: true,
		deletedAt: 'destroyTime'
	});
};