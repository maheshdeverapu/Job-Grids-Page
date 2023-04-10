const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/addJob",async(req,res)=>{
    try{
        let job = await User.find({userName:req.body.jobId});
        if(job){
            return res.status(401).json({
                error:"job already created on this job Id"
            })

        }
        
        job = await User.insert({
            jobId:req.body.jobId,
            jobTitle:req.body.jobTitle,
            experienceRange:req.body.experienceRange,
            salaryRange:req.body.salaryRange,
            jobPriority:req.body.jobPriority,
            postedOn:req.body.jobTitle,
            status:req.body.status,
            city:req.body.city,
            state:req.body.state,
        })
        res.json({
            message:"job successfully created..."
        })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
})
router.post("/editJob",async(req,res)=>{
    try{
        let job = await User.find({userName:req.body.jobId});
        if(!job){
            return res.status(401).json({
                error:"no job found on this job Id"
            })

        }
        
        job = await User.update({
            jobId:req.body.jobId,
            jobTitle:req.body.jobTitle,
            experienceRange:req.body.experienceRange,
            salaryRange:req.body.salaryRange,
            jobPriority:req.body.jobPriority,
            postedOn:req.body.jobTitle,
            status:req.body.status,
            city:req.body.city,
            state:req.body.state,
        })
        res.json({
            message:"job successfully created..."
        })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
})