import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./LoginPage";
import Signup from "./SignupPage";
import Logout from "./Logout";
import Crop from "./Week7/Crop";
import Resize from "./Week7/Resize";
import Compressor from "./Week7/Compressor";
import Enhancer from "./Week7/Enhancer";

const Week9 = () => {
  const loggedin = sessionStorage.getItem("isLoggedin");
  console.log(loggedin, "login");
  return (
    <Router basename="untitled">
      <Link to="/Logout" />
      <Routes>
        <Route path="/" element={loggedin ? <Logout /> : <Login />} />
        <Route path="/SignupPage" element={<Signup />} />
        <Route path="/Logout" element={<Logout />}>
          <Route path="Crop" element={<Crop />} />
          <Route path="Resize" element={<Resize />} />
          <Route path="Compressor" element={<Compressor />} />
          <Route path="Enhancer" element={<Enhancer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Week9;
