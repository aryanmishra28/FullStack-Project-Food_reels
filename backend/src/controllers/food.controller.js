const foodModel = require("../models/food.model");


async function createFood(req, res) {
    console.log(req.foodPartner);
}

module.exports={createFood};


// const foodController = require("../controllers/food.controller");
// const router = express.Router();

// // Route to add a new food item
// router.post('/add', foodController.addFoodItem);