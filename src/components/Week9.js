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
        <Route path="/Signup" element={<Signup />} />
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

// import React, { useState, useEffect } from "react";
// const Week9 = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const storedSession = localStorage.getItem("isLoggedIn");
//     if (storedSession === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Session Management Demo</h2>
//       {isLoggedIn ? (
//         <div>
//           <h3>Welcome User!</h3>
//           <h3>D. Laxman Reddy</h3>
//           <h3>2211cs010133</h3>
//           <h3>G7(A)-3</h3>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h3>Please Log In</h3>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Week9;
