import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { Link, Outlet } from "react-router-dom";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import Crop from "./Week7/Crop";
import Resize from "./Week7/Resize";
import Compressor from "./Week7/Compressor";
import Enhancer from "./Week7/Enhancer";
import "./Logout.css";
import profile from "./images/profile2.jpg";

const Logout = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [navigate, username]);

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("isLoggedin");
      Swal.fire({
        icon: "success",
        title: "Logout Successful!",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to login page upon OK button click
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ paddingBottom: "3rem" }}>
        <ResponsiveNavbar
          logo={<h4>ReClick</h4>}
          styles={{
            navigationBarLarge: {
              backgroundColor: "darkslategrey",
              color: "wheat",
            },
            navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
            navigationBarSmall: {
              backgroundColor: "#333333",
              color: "wheat",
            },
            navigationCardSmall: {
              backgroundColor: "#333333",
              color: "wheat",
            },
          }}
        >
          <ul>
            <li>
              <Nav.Link as={Link} to="/Logout/Crop">
                Crop
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/Logout/Resize">
                ReSize
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/Logout/Compressor">
                Compressor
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/Logout/Enhancer">
                Enhancer
              </Nav.Link>
            </li>
          </ul>
          <div style={{ position: "relative" }}>
            <img src={profile} alt="Profile" className="imgStyle" />
            <select
              onChange={handleLogout}
              style={{
                width: "200px",
                height: "40px",
                marginRight: "10px",
                background: "darkslategrey",
                color: "wheat",
                fontSize: "20px",
                border: "none",
              }}
            >
              <option value="" disabled selected hidden>
                {username}
              </option>
              <option
                value="logout"
                style={{
                  background: "darkslategrey",
                  color: "wheat",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Logout
              </option>
            </select>
          </div>
        </ResponsiveNavbar>
      </div>
      <Outlet />
    </div>
  );
};

export default Logout;
