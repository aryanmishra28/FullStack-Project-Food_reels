const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const {v4: uuid} = require("uuid");
const likeModel = require("../models/likes.model");
const saveModel = require("../models/save.model");


async function createFood(req, res) {
    try {
        // Validate required fields
        if (!req.body.name || !req.file) {
            return res.status(400).json({
                error: "Name and video file are required"
            });
        }

        console.log('Creating food item:', {
            name: req.body.name,
            description: req.body.description,
            foodPartner: req.foodPartner.id,
            fileSize: req.file.size
        });

        // Upload video to ImageKit
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
        console.log('Video uploaded to:', fileUploadResult.url);

        // Save food item to the database
        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner.id
        });

        console.log('Food item created:', foodItem._id);

        // Send single response
        res.status(201).json({
            message: "Food item created successfully",
            foodItem
        });

    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({
            error: "Failed to create food item",
            message: error.message
        });
    }
}

async function getFoodItems(req, res) {
    // Logic to fetch food items
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "food items fetched successfully",
        foodItems
    });
}

async function likeFood(req, res) {
    const { foodId } = req.body;
    const user = req.user;

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadyLiked) {
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: -1 }
        })

        return res.status(200).json({
            message: "Food unliked successfully"
        })
    }

    const like = await likeModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { likeCount: 1 }
    })

    res.status(201).json({
        message: "Food liked successfully",
        like
    })

}

async function saveFood(req, res) {

    const { foodId } = req.body;
    const user = req.user;

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: -1 }
        })

        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { savesCount: 1 }
    })

    res.status(201).json({
        message: "Food saved successfully",
        save
    })

}

async function getSaveFood(req, res) {

    const user = req.user;

    const savedFoods = await saveModel.find({ user: user._id }).populate('food');

    if (!savedFoods || savedFoods.length === 0) {
        return res.status(404).json({ message: "No saved foods found" });
    }

    res.status(200).json({
        message: "Saved foods retrieved successfully",
        savedFoods
    });

}//get all saved food items of a user, this is called in food.routes.js

module.exports={createFood, getFoodItems, likeFood, saveFood, getSaveFood};


// const foodController = require("../controllers/food.controller");
// const router = express.Router();

// // Route to add a new food item
// router.post('/add', foodController.addFoodItem);