const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
router.post("/",async(req,res)=>{
    try{
        let user = await User.find({userName:req.body.userName});
        if(user){
            return res.status(401).json({
                error:"user alredy exits please try with another user name"
            })

        }
        bcrypt.hash(req.body.password,10,async(err,hash)=>{
            if(err){
                console.log(err)
            }
            user = await User.create({
                userName,
                password:hash
            });
            
            res.json({
                message:"succesfully registered",
               user
            })
        })
        // user = await User.insert({
        //     userName:req.body.userName,
        //     password:req.body.password
        // })
        // res.json({
        //     message:"user successfully created..."
        // })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
})
router.post("/",async(req,res)=>{
    try{
        let user = await User.find({userName:req.body.userName});
        if(!user){
            return res.status(401).json({
                
                error:"please enter valid credentials"
            })

        }
        user=bcrypt.compare(req.body.password,user.password);
        if(!user){
            return res.status(401).json({
                
                error:"please enter valid credentials"
            })
        }
      
        res.json({
            message:"user successfully login"
        })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
})