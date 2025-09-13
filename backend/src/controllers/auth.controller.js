//This file is used to store logic of route folders
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const foodPartnerModel = require('../models/foodpartner.model');


// This function registers a new user
async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if(isUserAlreadyExists){
        return res.status(400).json({error:"User already exists"});
    }

    // Hash the password before saving, we use bcrypt for hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    //save the user to the database
    const user = await userModel.create({ fullName, email, password: hashedPassword });

    // Generate a JWT token for the user which will be used for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token);
    res.status(201).json({ message: 'User registered successfully',
        user:{
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
}

// This function logs in an existing user, it is an API endpoint
async function loginUser(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token);
    res.status(200).json({
        message: 'Login successful',
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    });
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: 'Logout successful' });
}

async function registerFoodPartner(req, res) {

    const {name, email, password} = req.body;
    const isFoodPartnerAlreadyExists = await foodPartnerModel.findOne({email});

    if(isFoodPartnerAlreadyExists){
        return res.status(400).json({error:"Food Partner already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({name, email, password: hashedPassword});

    const token = jwt.sign({id: foodPartner._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.cookie("token", token);
    res.status(201).json({message: 'Food Partner registered successfully',
    foodPartner:{
        _id: foodPartner._id,
        name:foodPartner.name,
        email:foodPartner.email
    }
});
}

async function loginFoodPartner(req, res) {
    const {email, password} = req.body;
    const foodPartner = await foodPartnerModel.findOne({email});
    if(!foodPartner){
        return res.status(401).json({error: 'Invalid credentials'});
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
    if(!isPasswordValid){
        return res.status(401).json({error: 'Invalid credentials'});
    }
    const token = jwt.sign({id: foodPartner._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.cookie("token", token);
    res.status(200).json({message: 'Login successful',
    foodPartner:{
        _id: foodPartner._id,
        name:foodPartner.name,
        email:foodPartner.email
    }
});
}

async function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({message: 'Logout successful'});
}



module.exports = {registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner};