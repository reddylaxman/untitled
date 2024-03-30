import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import Signup from "./SignupPage";

const Week8 = () => {
  return (
    <Router basename="untitled">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/SignupPage" element={<Signup />} />
      </Routes>
    </Router>
  );
};
export default Week8;
