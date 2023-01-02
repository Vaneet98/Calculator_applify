var express = require("express");
var router = express.Router();
const sendResponse = require("../Helper/sendResponse");
let base = "http://localhost:8081";
const homeController = require("../controllers/homeController");

    
// router.get("/addcatergory", (req, res) => {
//   res.render("addcatergory", { base: base });
// });

router.post("/saveData", async (req, res) => {
  console.log("req.body---", req.body)
  let saveData= await homeController.saveData(req.body);
    res.render("thankyou", {
      data:{}
    }) 
         
}); 



router.post("/addNewCategoryByUser", async (req, res) => {
  console.log("req.body---", req.body)
  let saveData= await homeController.addNewCategoryByUser(req.body);
    res.render("thankyou", {
      data:{}
    }) 
         
}); 


   
router.get("/", async (req, res) => {
  let readymadeData= await homeController.getReadyMadeCategories();
  readymadeData = await JSON.parse(JSON.stringify(readymadeData));
  
  let customData= await homeController.getCustomCategories();
  customData = await JSON.parse(JSON.stringify(customData));
 
 let platformData= await homeController.getPlatforms();
 platformData = await JSON.parse(JSON.stringify(platformData));
 
 let getHours= await homeController.getHours();
 getHours = await JSON.parse(JSON.stringify(getHours));

    res.render("applify", {
      readymadeData: readymadeData,  
      customData: customData,
      getHours:getHours,
      platformData: platformData,
      base: base,
      imgs: "/public/images/app1.png"
    }) 
         
}); 


module.exports = router;
