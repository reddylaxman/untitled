import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://my-json-server-nx6t.onrender.com/users", {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((users) => {
        console.log(formData);
        const user = users.find(
          (user) =>
            user.username === formData.username &&
            user.password === formData.password
        );
        if (user) {
          setTimeout(() => {
            toast.success("Login successful!");
          }, 1000);
        } else {
          toast.error("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);

        toast.error("An error occurred while processing your request");
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
      <ToastContainer />
    </div>
  );
}

export default Login;
