import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// Import necessary components from react-router-dom

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<h1>UserRegister</h1>} />
        <Route path="/user/login" element={<div>UserLogin</div>} />
        <Route path="/food-partner/register" element={<div>FoodPartnerRegister</div>} />
        <Route path="/food-partner/login" element={<div>FoodPartnerLogin</div>} />
        <Route path="/admin/login" element={<div>AdminLogin</div>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes