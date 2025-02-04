const express=require("express");
const router=express.Router();
const authController=require("../controller/auth.controller.js");

router.post("/signup",authController.register);
router.post("/signin",authController.login);
router.get("/hello", (req, res) => {res.send("hi")})
module.exports=router;