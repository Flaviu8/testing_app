import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgot_password/ForgotPassword";
import ResetPassword from "./components/forgot_password/ResetPassword";
import Dash from "./components/Dash";
import Index from "./Index";


const App = () => {


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
