const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
    jobId:{type:String,required:true},
    jobTitle:{type:String,required:true},
    experienceRange:{type:String,required:true},
    salaryRange:{type:String,required:true},
    jobPriority:{type:String,required:true},
    postedOn:{type:String,required:true},
    status:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
})
const Job = mongoose.model("job",jobModel);
module.exports = Job;