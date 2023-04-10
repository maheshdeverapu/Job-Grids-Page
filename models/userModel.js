const mongoose = require("mongoose");

userSchema = mongoose.Schema({
    userName :{type:String,unique:true,required:true},
    password:{type:String,required:true}
})
const User = mongoose.model("user",userSchema);

module.exports = User;