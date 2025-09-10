const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const {v4: uuid} = require("uuid");


async function createFood(req, res) {
    // console.log(req.foodPartner); //getting value from middleware
    // // Logic to create a new food item
    // // You can access the food partner's information from req.foodPartner
    // // For example, you might want to associate the food item with the food partner's ID

    // console.log(req.body);
    // console.log(req.file);//file will be available because of multer middleware, this will contain video file buffer and other info


    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    // console.log(fileUploadResult);

   // Save food item to the database
    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner.id
    });

    res.status(201).json({
        message: "Food item created successfully",
        foodItem
    });

    // console.log(foodItem);


    res.send("Food created successfully");
}

async function getFoodItems(req, res) {
    // Logic to fetch food items
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "food items fetched successfully",
        foodItems
    });
}

module.exports={createFood, getFoodItems};


// const foodController = require("../controllers/food.controller");
// const router = express.Router();

// // Route to add a new food item
// router.post('/add', foodController.addFoodItem);