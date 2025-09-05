// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');

const app=express();
app.use(cookieParser());
app.use(express.json());//brings data in json format from req body to make it readable

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/api/auth', authRoutes); //routes related to authentication, this will be used for user and food partner both
app.use('/api/food', foodRoutes); //routes related to food

// start server
module.exports=app;