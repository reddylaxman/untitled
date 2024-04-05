import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import Signup from "./SignupPage";
import Logout from "./Logout";

const Week9 = () => {
  const loggedin = sessionStorage.getItem("isLoggedin");
  console.log(loggedin, "login");
  return (
    <Router basename="untitled">
      <Routes>
        <Route path="/" element={loggedin ? <Logout /> : <Login />} />
        <Route path="/SignupPage" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};
export default Week9;
