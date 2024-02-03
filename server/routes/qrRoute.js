const express = require("express");
const jwt = require("jsonwebtoken");

const qrrouter = express.Router();

qrrouter.get('/getQr',(req,res)=>{
    const token = req.cookies.token;
    if(token){

        jwt.verify(token,'asdnbajsfjksaf',{},(err,userData)=>{
            if(err) throw err;
            console.log("From server: ",userData);
            res.json(userData);
        })
    }

})
module.exports = qrrouter