const _ = require("underscore");
const moment = require("moment");
const Service = require("../services");
const message = require("../config/messages");
let Response = require("../config/response");
const Joi = require("joi");
let config = require("../config/env")();
let commonHelper = require("../Helper/common");
let NotificationManager = require("../Helper/mailer");
let TokenManager = require("../Helper/adminTokenManager");
const path = require("path");
const Sequelize = require("sequelize");

module.exports = {
  addPlateform: async (payloadData, path) => {
    const schema = Joi.object().keys({
      typeId: Joi.number().optional(),
      category: Joi.string().optional(),
      mobile: Joi.number().optional(),
      web: Joi.number().optional(),
      both: Joi.number().optional(),
      email: Joi.number().optional(),
      twoStep: Joi.number().optional(),
      viaSocial: Joi.number().optional(),
      NoSignUp: Joi.number().optional(),
      accrequired: Joi.number().optional(),
      notrequired: Joi.number().optional(),
      userFeed: Joi.number().optional(),
      search: Joi.number().optional(),
      pushNoti: Joi.number().optional(),
      messUserMan: Joi.number().optional(),
      RatingReview: Joi.number().optional(),
      RewardDeal: Joi.number().optional(),
      payEcommerce: Joi.number().optional(),
      categoryFilter: Joi.number().optional(),
      userGenerated: Joi.number().optional(),
      Booking: Joi.number().optional(),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("payload data===?", payload);

    let objToSave = {};
    if (_.has(payload, "typeId") && payload.typeId != "")
      objToSave.typeId = payload.typeId;
    if (_.has(payload, "category") && payload.category != "")
      objToSave.category = payload.category;
    if (_.has(payload, "mobile") && payload.mobile != "")
      objToSave.mobile = payload.mobile;
    if (_.has(payload, "web") && payload.web != "") objToSave.web = payload.web;
    if (_.has(payload, "both") && payload.both != "")
      objToSave.both = payload.both;
    if (_.has(payload, "email") && payload.email != "")
      objToSave.email = payload.email;
    if (_.has(payload, "twoStep") && payload.twoStep != "")
      objToSave.twoStep = payload.twoStep;
    if (_.has(payload, "viaSocial") && payload.viaSocial != "")
      objToSave.viaSocial = payload.viaSocial;
    if (_.has(payload, "NoSignUp") && payload.NoSignUp != "")
      objToSave.NoSignUp = payload.NoSignUp;
    if (_.has(payload, "accrequired") && payload.accrequired != "")
      objToSave.accrequired = payload.accrequired;
    if (_.has(payload, "notrequired") && payload.notrequired != "")
      objToSave.notrequired = payload.notrequired;
    if (_.has(payload, "userFeed") && payload.userFeed != "")
      objToSave.userFeed = payload.userFeed;
    if (_.has(payload, "search") && payload.search != "")
      objToSave.search = payload.search;
    if (_.has(payload, "pushNoti") && payload.pushNoti != "")
      objToSave.pushNoti = payload.pushNoti;
    if (_.has(payload, "messUserMan") && payload.messUserMan != "")
      objToSave.messUserMan = payload.messUserMan;
    if (_.has(payload, "RatingReview") && payload.RatingReview != "")
      objToSave.RatingReview = payload.RatingReview;
    if (_.has(payload, "RewardDeal") && payload.RewardDeal != "")
      objToSave.RewardDeal = payload.RewardDeal;
    if (_.has(payload, "payEcommerce") && payload.payEcommerce != "")
      objToSave.payEcommerce = payload.payEcommerce;
    if (_.has(payload, "categoryFilter") && payload.categoryFilter != "")
      objToSave.categoryFilter = payload.categoryFilter;
    if (_.has(payload, "userGenerated") && payload.userGenerated != "")
      objToSave.userGenerated = payload.userGenerated;
    if (_.has(payload, "Booking") && payload.Booking != "")
      objToSave.Booking = payload.Booking;

    let addPlateform = await Service.homeService.saveData(
      objToSave
    );
    if (addPlateform) {
      return message.success.ADDED;
    } else {
      return Response.error_msg.notAdded;
    }
  },

  editPlateform: async (payloadData, path) => {
    const schema = Joi.object().keys({
      id: Joi.string().guid({ version: "uuidv4" }).required(),
      typeId: Joi.number().optional(),
      category: Joi.string().optional(),
      mobile: Joi.number().optional(),
      web: Joi.number().optional(),
      both: Joi.number().optional(),
      email: Joi.number().optional(),
      twoStep: Joi.number().optional(),
      viaSocial: Joi.number().optional(),
      NoSignUp: Joi.number().optional(),
      accrequired: Joi.number().optional(),
      notrequired: Joi.number().optional(),
      userFeed: Joi.number().optional(),
      search: Joi.number().optional(),
      pushNoti: Joi.number().optional(),
      messUserMan: Joi.number().optional(),
      RatingReview: Joi.number().optional(),
      RewardDeal: Joi.number().optional(),
      payEcommerce: Joi.number().optional(),
      categoryFilter: Joi.number().optional(),
      userGenerated: Joi.number().optional(),
      Booking: Joi.number().optional(),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("payload data===?", payload);

    let condition = {
      id: payload.id,
    };

    let objToSave = {};
    if (_.has(payload, "typeId") && payload.typeId != "")
      objToSave.typeId = payload.typeId;
    if (_.has(payload, "category") && payload.category != "") objToSave.categor;
    if (_.has(payload, "id") && payload.id != "") objToSave.id = payload.id;
    if (_.has(payload, "mobile") && payload.mobile != "")
      objToSave.mobile = payload.mobile;
    if (_.has(payload, "web") && payload.web != "") objToSave.web = payload.web;
    if (_.has(payload, "both") && payload.both != "")
      objToSave.both = payload.both;
    if (_.has(payload, "email") && payload.email != "")
      objToSave.email = payload.email;
    if (_.has(payload, "twoStep") && payload.twoStep != "")
      objToSave.twoStep = payload.twoStep;
    if (_.has(payload, "viaSocial") && payload.viaSocial != "")
      objToSave.viaSocial = payload.viaSocial;
    if (_.has(payload, "NoSignUp") && payload.NoSignUp != "")
      objToSave.NoSignUp = payload.NoSignUp;
    if (_.has(payload, "accrequired") && payload.accrequired != "")
      objToSave.accrequired = payload.accrequired;
    if (_.has(payload, "notrequired") && payload.notrequired != "")
      objToSave.notrequired = payload.notrequired;
    if (_.has(payload, "userFeed") && payload.userFeed != "")
      objToSave.userFeed = payload.userFeed;
    if (_.has(payload, "search") && payload.search != "")
      objToSave.search = payload.search;
    if (_.has(payload, "pushNoti") && payload.pushNoti != "")
      objToSave.pushNoti = payload.pushNoti;
    if (_.has(payload, "messUserMan") && payload.messUserMan != "")
      objToSave.messUserMan = payload.messUserMan;
    if (_.has(payload, "RatingReview") && payload.RatingReview != "")
      objToSave.RatingReview = payload.RatingReview;
    if (_.has(payload, "RewardDeal") && payload.RewardDeal != "")
      objToSave.RewardDeal = payload.RewardDeal;
    if (_.has(payload, "payEcommerce") && payload.payEcommerce != "")
      objToSave.payEcommerce = payload.payEcommerce;
    if (_.has(payload, "categoryFilter") && payload.categoryFilter != "")
      objToSave.categoryFilter = payload.categoryFilter;
    if (_.has(payload, "userGenerated") && payload.userGenerated != "")
      objToSave.userGenerated = payload.userGenerated;
    if (_.has(payload, "Booking") && payload.Booking != "")
      objToSave.Booking = payload.Booking;

    let addPlateform = await Service.homeService.updateData(
      condition,
      objToSave
    );
    if (addPlateform) {
      return message.success.ADDED;
    } else {
      return Response.error_msg.notAdded;
    }
  },

  saveData: async (payloadData) => {
    const schema = Joi.object().keys({
      userName: Joi.string().optional().allow(""),
      email: Joi.string().optional().allow(""),
      platformName: Joi.string().optional().allow(""),
      category: Joi.string().optional().allow(""),
      loginType: Joi.string().optional().allow(""),
      profile: Joi.string().optional().allow(""),
      mvp: Joi.string().optional().allow(""),
      totalHours: Joi.number().optional().allow(0),
      additionalFeatures: Joi.string().optional().allow(""),
      applicationType: Joi.string().optional().allow(""),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    let objToSave = {};
    if (_.has(payload, "userName") && payload.userName != "") objToSave.name = payload.userName;
    if (_.has(payload, "email") && payload.email != "") objToSave.email = payload.email;
    if (_.has(payload, "platformName") && payload.platformName != "") objToSave.platform = payload.platformName;
    if (_.has(payload, "category") && payload.category != "") objToSave.category = payload.category;
    if (_.has(payload, "loginType") && payload.loginType != "") objToSave.loginMethod = payload.loginType;
    if (_.has(payload, "profile") && payload.profile != "") objToSave.profile = payload.profile;
    if (_.has(payload, "mvp") && payload.mvp != "") objToSave.mvpFeatures = payload.mvp;
    if (_.has(payload, "additionalFeatures") && payload.additionalFeatures != "") objToSave.additionalFeatures = payload.additionalFeatures;
    if (_.has(payload, "applicationType") && payload.applicationType != "") objToSave.applicationType = payload.applicationType;
    if (_.has(payload, "totalHours") && payload.totalHours != "") objToSave.totalHours = payload.totalHours;

    let saveUser= await Service.homeService.saveUserData(objToSave);
    if (saveUser) {
      return message.success.ADDED;
    } else {
      return Response.error_msg.notAdded;
    }
  },

  addNewCategoryByUser: async (payloadData) => {
    const schema = Joi.object().keys({
      name: Joi.string().optional().allow(""),
      email: Joi.string().optional().allow(""),
      category: Joi.string().optional().allow(""),
      platform: Joi.string().optional().allow("")
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    let objToSave = {};
    if (_.has(payload, "name") && payload.name != "") objToSave.name = payload.name;
    if (_.has(payload, "email") && payload.email != "") objToSave.email = payload.email;
    if (_.has(payload, "category") && payload.category != "") objToSave.category = payload.category;
    if (_.has(payload, "platform") && payload.platform != "") objToSave.platform = payload.platform;
  
    let saveUser= await Service.homeService.saveUserCategoriesData(objToSave);
    if (saveUser) {
      return message.success.ADDED;
    } else {
      return Response.error_msg.notAdded;
    }
  },


  getPlateform: async (payloadData) => {
    let profile = await Service.homeService.getplateformAll(
      payloadData
    );
    console.log(
      "This is industryCategoryController profile return the data from database",
      profile
    );

    if (profile) {
      return profile;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },

  getPlatforms: async () => {
    let platform = await Service.homeService.getplateformAll();
    if (platform) {
      return platform;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },

  getHours: async () => {
    let platform = await Service.homeService.getHours();
    if (platform) {
      return platform;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },
  
  getReadyMadeCategories: async () => {
    let data = Service.homeService.getCategories({applicationTypeId: "0e0bb306-a7aa-4df9-9740-f03b53cb4e01"});
    if (data) {
      return data;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },

  getCustomCategories: async () => {
    let data = Service.homeService.getCategories({applicationTypeId: "0e0bb306-a7aa-4df9-9740-f03b53cb4e02"});
    if (data) {
      return data;
    } else {
      throw Response.error_msg.recordNotFound;
    }
  },
};
