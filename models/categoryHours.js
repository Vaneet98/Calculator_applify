let appConstants = require("../config/appConstants")
module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("categoryHours", {
		...require("./core")(Sequelize, DataTypes),
        categoryId:{
            type: DataTypes.STRING(200),
			allowNull: true
        },
        platformId:{
            type: DataTypes.STRING(200),
			allowNull: true
        },
        emailLogin:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        twoStepAuth:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        socialLogin:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        noSignUp:{  
            type: DataTypes.INTEGER,
			defaultValue:0
        },
        accountRequired:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        noAccountRequired:{
            type: DataTypes.INTEGER,
		    defaultValue:0
        },
        userFeed:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        search:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        pushNotifications:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        messageAndManagement:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        ratingReview:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        rewardDeal:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        payEcommerce:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        categoryFilter:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        userGenerated:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        },
        booking:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:0
        }
	}, {
		tableName: "categoryHours",
		timestamps: true,
		//paranoid: true,
		deletedAt: 'destroyTime'
	});
};