const mongoose=require('mongoose');

//this function will connect to mongodb, will be called in server.js and will not work until called

function connectDB(){
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});
}

module.exports=connectDB;