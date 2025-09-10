//This file will contain routes related to food operations like adding food items, fetching food items etc.
//routes are used to define various endpoints for the application(endpoints means different urls for different functionalities)

const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
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