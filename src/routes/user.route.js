const express=require("express")
const router=express.Router();
const userController=require("../controller/user.controller.js")

router.get("/profile",userController.getUserProfile);
router.get("/profile",userController.getAllUsers);

module.exports=router;