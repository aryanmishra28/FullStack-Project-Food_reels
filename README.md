# 🍜 Swiggy Reels - Food Video Platform

> **A full-stack TikTok-inspired food video platform** featuring user authentication, video uploads, real-time interactions, and responsive design. Built with modern web technologies and scalable architecture.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## ✨ Key Features & Technical Highlights

- **🔐 JWT Authentication** - Secure token-based auth with HTTP-only cookies
- **📱 Responsive Design** - Mobile-first approach with CSS variables
- **🎥 Video Upload** - Cloud storage integration with ImageKit
- **⚡ Real-time Interactions** - Like, save, and engagement features
- **🏗️ Scalable Architecture** - MVC pattern with modular components
- **🛡️ Security** - Password hashing, CORS, input validation

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/swiggy-reels
JWT_SECRET=your-jwt-secret
IMAGE_PUBLIC_KEY=your-imagekit-public-key
IMAGE_PRIVATE_KEY=your-imagekit-private-key
IMAGE_URL_ENDPOINT=your-imagekit-url-endpoint
```

Start server:
```bash
node server.js
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📁 Project Structure

```
Swiggy reels/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # Business logic handlers
│   │   │   ├── auth.controller.js
│   │   │   ├── food.controller.js
│   │   │   └── food-partner.controller.js
│   │   ├── models/         # MongoDB/Mongoose schemas
│   │   │   ├── user.model.js
│   │   │   ├── foodpartner.model.js
│   │   │   ├── food.model.js
│   │   │   ├── likes.model.js
│   │   │   └── save.model.js
│   │   ├── routes/         # API route definitions
│   │   │   ├── auth.routes.js
│   │   │   ├── food.routes.js
│   │   │   └── food-partner.routes.js
│   │   ├── middlewares/    # Authentication & validation
│   │   │   └── auth.middleware.js
│   │   ├── services/       # External service integrations
│   │   │   └── storage.service.js
│   │   ├── db/            # Database connection
│   │   │   └── db.js
│   │   └── app.js         # Express app configuration
│   ├── package.json
│   └── server.js          # Application entry point
├── frontend/               # React.js application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── BottomNav.jsx
│   │   │   └── ReelFeed.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── auth/
│   │   │   ├── food-partner/
│   │   │   └── general/
│   │   ├── routes/        # React Router setup
│   │   │   └── AppRoutes.jsx
│   │   ├── styles/        # CSS styling files
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── videos/                 # Sample video files
```

## 🛠️ Technical Stack

### Backend Technologies
- **Node.js & Express.js** - RESTful API development
- **MongoDB & Mongoose** - NoSQL database with ODM
- **JWT & bcrypt** - Authentication & password security
- **Multer** - File upload middleware
- **ImageKit** - Cloud video storage service
- **CORS** - Cross-origin resource sharing

### Frontend Technologies
- **React.js** - Component-based UI development
- **Vite** - Modern build tool & dev server
- **React Router** - Client-side routing
- **CSS3** - Responsive design with CSS variables
- **JavaScript ES6+** - Modern JavaScript features

### Development Tools
- **Git** - Version control
- **npm** - Package management
- **Postman/Thunder Client** - API testing

## 🔌 Key API Endpoints

- `POST /api/auth/user/register` - User registration
- `POST /api/auth/user/login` - User login
- `POST /api/auth/foodpartner/register` - Food partner registration
- `POST /api/food/` - Upload food video (Food Partner only)
- `GET /api/food/` - Get all food videos (User only)
- `POST /api/food/like` - Like/unlike video (User only)
- `POST /api/food/save` - Save/unsave video (User only)

## 🎯 Core Functionality

### User Experience
- **🔑 Dual Authentication System** - Separate login flows for users and food partners
- **📱 TikTok-style Video Feed** - Smooth scrolling with video playback
- **❤️ Social Features** - Like, save, and engagement tracking
- **💾 Saved Collections** - Users can bookmark favorite content
- **📱 Mobile Responsive** - Optimized for all device sizes

### Business Features
- **🏪 Food Partner Portal** - Restaurant onboarding and management
- **📊 Analytics** - Like and save count tracking
- **🎥 Content Management** - Video upload with descriptions
- **🔍 User Profiles** - Detailed partner information display

## 🗄️ Database Models

- **User** - fullName, email, password
- **FoodPartner** - name, contactName, phone, address, email, password
- **Food** - name, description, video URL, foodPartner, likeCount, savesCount
- **Like** - user, food
- **Save** - user, food

## 🔐 Security Implementation

- **JWT Authentication** - Stateless token-based authentication
- **HTTP-Only Cookies** - Secure token storage
- **bcrypt Password Hashing** - Industry-standard password security
- **CORS Protection** - Cross-origin request security
- **Input Validation** - Server-side data validation
- **Middleware Protection** - Route-level authentication guards

## 🚀 Performance & Scalability

- **MVC Architecture** - Clean separation of concerns
- **Modular Components** - Reusable and maintainable code
- **Cloud Storage** - Scalable video hosting with ImageKit
- **Database Optimization** - Efficient MongoDB queries with Mongoose
- **Responsive Design** - Optimized for all devices and screen sizes

## 💼 Business Impact

This project demonstrates proficiency in:
- **Full-stack Development** - End-to-end application development
- **Modern Web Technologies** - Latest frameworks and tools
- **Database Design** - Efficient data modeling and relationships
- **API Development** - RESTful service architecture
- **Security Best Practices** - Authentication and data protection
- **User Experience Design** - Intuitive and responsive interfaces

---

**Ready to scale and deploy! 🚀**
