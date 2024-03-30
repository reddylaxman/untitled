import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    address: "",
    gender: "",
    pno: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://my-json-server-nx6t.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(formData);
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/LoginPage");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Signup failed. Please try again.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              placeholder="Enter username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Full name: </label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              value={formData.fullname}
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              inputMode="numeric"
              name="pno"
              value={formData.pno}
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group col-md-12">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label style={{ verticalAlign: "center" }}>Address: </label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            placeholder="Enter address"
            onChange={handleChange}
            required
          />
          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
            required
          />
          <label htmlFor="other">Other</label>
          <br />
          <button type="submit" className="btn">
            Submit
          </button>{" "}
          {"                          "}
          <button className="btn ">
            <Link to="/LoginPage" className="btn  nav-link">
              Login
            </Link>
          </button>
        </div>
      </form>
      <ToastContainer className="toast-container" />
    </div>
  );
}

export default Signup;
