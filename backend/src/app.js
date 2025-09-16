// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app=express();

app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());//brings data in json format from req body to make it readable


app.get('/',(req,res)=>{
    res.send("Hello World");
});

//all routes under these routes will be prefixed with /api/auth and /api/food and /api/food-partner
app.use('/api/auth', authRoutes); //routes related to authentication, this will be used for user and food partner both
app.use('/api/food', foodRoutes); //routes related to food
app.use('/api/food-partner', foodPartnerRoutes); //routes related to food partner

// start server
module.exports=app;



//app.js is the main file that will be used to start the server and run the application, register middleware like cookie parser, json parser, etc.
//register routes for auth and food
//start the server
//export the app