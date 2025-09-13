//This file will contain routes related to food operations like adding food items, fetching food items etc.
//routes are used to define various endpoints for the application(endpoints means different urls for different functionalities)

const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller'); //this is the controller file that will be used to handle the logic of the routes and will validate the data and then call the model to perform the operation
const authMiddleware = require('../middlewares/auth.middleware');//this is the middleware file that will be used to authenticate the user and food partner and then call the controller to perform the operation
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(), // Store files in memory as Buffer objects
});

// POST /api/food/
router.post('/', authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),
    foodController.createFood);


// GET /api/food/
router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems);

module.exports = router;