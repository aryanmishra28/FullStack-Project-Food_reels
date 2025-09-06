//This file will contain routes related to food operations like adding food items, fetching food items etc.
//routes are used to define various endpoints for the application(endpoints means different urls for different functionalities)

const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.authFoodPartnerMiddleware,foodController.createFood);


module.exports = router;