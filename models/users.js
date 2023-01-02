let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("users", {
		...require("./core")(Sequelize, DataTypes),
		name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        email: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        totalHours: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
        applicationType: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        category: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        loginMethod: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        profile: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        platform: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
        mvpFeatures: {
			type: DataTypes.TEXT,
			allowNull: true
		},
        additionalFeatures: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: "users",
		timestamps: true,
	//	paranoid: true,
		deletedAt: 'destroyTime'
	});
};