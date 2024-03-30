import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import Signup from "./SignupPage";
const Week8 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/untitled" element={<Login />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/SignupPage" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Week8;
