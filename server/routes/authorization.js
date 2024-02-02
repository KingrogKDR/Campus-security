const express = require("express");
const jwt  = require("jsonwebtoken")
const router = express.Router();
const { jwtDecode }=require("jwt-decode");
const Users = require("../models/Users.js")


router.post("/register",async (req,res)=>{
    const {name,emailid,phoneno,dob,aadhar_number}=req.body;
    try{
        const userDoc =await Users.create({name,emailid,phoneno,dob,aadhar_number});
        res.json(userDoc);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message:"User already exists"});
    }
})

router.post("/login",async (req,res)=>{
    const {aadhar_number,emailid} = req.body
    const user = await Users.findOne({emailid});
    if(!user){
        req.status(404).json({message:"User not found"})
    }
    if(aadhar_number===user.aadhar_number){
        jwt.sign({userid:user._id},'asdnbajsfjksaf',(err,token)=>{
            if(err) throw err;
            res.cookie("token",token).json({
                id:user._id,
                name:user.name
            })
        })
    }
    else{
        res.json({message:"Invalid credentials"})
    }
})

router.get("/profile",(req,res)=>{
    const token = req.cookies.token;
    if(token){
        jwt.verify(token,'asdnbajsfjksaf',{},(err,userData)=>{
            if(err) throw err;
            console.log(userData);
        })
    }
})
module.exports=router;