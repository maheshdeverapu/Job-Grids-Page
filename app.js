const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"config.env"})
}
db = process.env.MONGODBURI;

const connectDatabase =async()=>{
try{
    await mongoose.connect(db);
    console.log("connected to database")

}catch(err){
    console.log(err.message);
    console.log('check your ENV VAR');
    process.exit(1);
}
}
connectDatabase();
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

app.listen(port,()=>{console.log(`server is up at port number ${port}`)});