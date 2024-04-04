import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://my-json-server-nx6t.onrender.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((users) => {
        const user = users.find(
          (user) =>
            user.username === formData.username &&
            user.password === formData.password
        );
        if (user) {
          console.log(formData);
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid username or password!",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <div className="col-md-12">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              placeholder="Enter username"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="col-md-12">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn">
          Login
        </button>
        {"         "}
        <button className="btn ">
          <Link to="/SignupPage" className="btn  nav-link">
            Signup
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
