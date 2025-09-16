//This file is used to store routes related to authentication
const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

//user auth APIs
router.post('/user/register',authController.registerUser); // from auth.controller.js
router.post('/user/login', authController.loginUser);// from auth.controller.js
router.get('/user/logout', authController.logoutUser);


//food partner auth APIs
router.post('/foodpartner/register', authController.registerFoodPartner);
router.post('/foodpartner/login', authController.loginFoodPartner);
router.get('/foodpartner/logout', authController.logoutFoodPartner);


module.exports = router;


//Auth: Register/Login (User or Food Partner)
// Route: src/routes/auth.routes.js
// Endpoints:
// POST /api/auth/user/register, POST /api/auth/user/login, GET /api/auth/user/logout
// POST /api/auth/foodpartner/register, POST /api/auth/foodpartner/login, GET /api/auth/foodpartner/logout
// Each endpoint calls a controller function in auth.controller.js.
