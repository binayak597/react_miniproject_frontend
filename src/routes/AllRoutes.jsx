import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Admin from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){

    return (
        <Routes>
            <Route exact path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>}></Route>
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>}></Route>
        </Routes>
    );
}