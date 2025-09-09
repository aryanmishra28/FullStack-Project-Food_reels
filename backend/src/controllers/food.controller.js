const foodModel = require("../models/food.model");


async function createFood(req, res) {
    console.log(req.foodPartner); //getting value from middleware
    // Logic to create a new food item
    // You can access the food partner's information from req.foodPartner
    // For example, you might want to associate the food item with the food partner's ID

    console.log(req.body);
    console.log(req.file);//file will be available because of multer middleware, this will contain video file buffer and other info
    res.send("Food created successfully");
}

module.exports={createFood};


// const foodController = require("../controllers/food.controller");
// const router = express.Router();

// // Route to add a new food item
// router.post('/add', foodController.addFoodItem);