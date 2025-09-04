//This file is used to store logic of route folders
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if(isUserAlreadyExists){
        return res.status(400).json({error:"User already exists"});
    }

    // Hash the password before saving, we use bcrypt for hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ fullName, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, 'c484b36f542c232d9d837e3c44747c53', { expiresIn: '1h' });
    res.cookie("token", token);
    res.status(201).json({ message: 'User registered successfully',
        user:{
            _id: user._id,
            fullname: user.fullName,
            email: user.email,
        }
    });
}

module.exports = {registerUser};