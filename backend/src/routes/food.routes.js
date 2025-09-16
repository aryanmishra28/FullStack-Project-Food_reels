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
    foodController.createFood); //this route is used to create a new food item, it uses authFoodPartnerMiddleware to authenticate the food partner before allowing them to create a food item, it also uses multer middleware to handle file upload, the video file will be available in req.file in the controller


// GET /api/food/
router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems); //this route is used to fetch all food items, it uses authUserMiddleware to authenticate the user before allowing them to fetch food items


router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.likeFood// this calls likeFood function in food.controller.js
)
    //this route is used to like a food item, it uses authUserMiddleware to authenticate the user before allowing them to like a food item


router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood// this calls saveFood function in food.controller.js
)
//this route is used to save a food item, it uses authUserMiddleware to authenticate the user before allowing them to save a food item


router.get('/save',
    authMiddleware.authUserMiddleware,
    foodController.getSaveFood // this calls getSaveFood function in food.controller.js
)
//this route is used to get all saved food items of a user, it uses authUserMiddleware to authenticate the user before allowing them to get saved food items

module.exports = router;