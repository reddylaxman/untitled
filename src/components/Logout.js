import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");

    if (!username) {
      navigate("/");
    }
  }, [navigate]);

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
    <div
      style={{
        display: "grid",
        placeContent: "center",
        backgroundColor: "white",
        maxWidth: "50%",
        maxHeight: "50%",
        borderRadius: "20px",
        height: "15rem",
        marginTop: "20%",
        marginLeft: "25%",
      }}
    >
      <h4>Logout Page</h4>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Logout;
