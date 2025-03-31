import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgot_password/ForgotPassword";
import ResetPassword from "./components/forgot_password/ResetPassword";
import Dashboard from "./components/dashboard";


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
