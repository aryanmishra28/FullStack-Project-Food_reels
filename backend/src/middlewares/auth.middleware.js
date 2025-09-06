const foodPartnerModel = require('../models/foodPartner.model');
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Login First ' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner = foodPartner;

        next();
    }
    catch(err){
        return res.status(401).json({ message: 'Invalid Token' });
    }
}

module.exports = {authFoodPartnerMiddleware};





// // Import necessary tools
// const foodPartnerModel = require('../models/foodPartner.model');
//  // Gets the list of registered food partners.

// const jwt = require('jsonwebtoken');
// // The tool to verify the authenticity of the ID (token).

// // This is our bouncer function. It stands between the incoming request and the protected route.
// async function authFoodPartnerMiddleware(req, res, next) {

//     // 1. The bouncer asks for the ID. In this case, it's a "token" stored in the browser's cookies.
//     const token = req.cookies.token;

//     // 2. If there's no ID, the bouncer immediately denies entry.
//     if (!token) {
//         return res.status(401).json({ message: 'Login First ' });
//     }

//     // 3. If there is an ID, the bouncer will try to verify it.
//     try{
//         // 4. The bouncer uses the 'jsonwebtoken' tool to check if the token is valid and hasn't expired.
//         // It uses a secret key (process.env.JWT_SECRET) that only the server knows.
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // 5. After verifying the token, the bouncer looks up the food partner's information in the database using the ID from the token.
//         const foodPartner = await foodPartnerModel.findById(decoded.id);

//         // 6. The bouncer attaches the food partner's information to the request, so the next part of the application knows who they are.
//         req.foodPartner = foodPartner;

//         // 7. The bouncer is satisfied and lets the request proceed to the intended route. "You're on the list, go ahead."
//         next();
//     }
//     // 8. If the token is fake or expired, the verification will fail.
//     catch(err){
//         // The bouncer denies entry because of an invalid ID.
//         return res.status(401).json({ message: 'Invalid Token' });
//     }
// }

// // Export the bouncer function so other parts of the application can use it.
// module.exports = {authFoodPartnerMiddleware};



//This code is a security checkpoint for your application. Before a "food partner" can access certain routes (like a page to upload a new food video), this middleware function runs. It checks for a valid login token (the "ID card") in the request's cookies.

// If the token is valid, it fetches the food partner's data and attaches it to the request, allowing them to proceed.

// If the token is missing or invalid, it blocks the request and sends back an error message, protecting your application from unauthorized access