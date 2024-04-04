import React, { useState } from "react";
import "./week6.css";
const Week6 = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  const LoginComponent = () => {
    return (
      <div>
        <h4 style={{ color: "blue" }}>This is login page</h4>
        <h4 style={{ color: "red" }}>Please, Login to your account</h4>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  const WelcomeComponent = () => {
    return (
      <div>
        <h4 style={{ color: "magenta" }}>
          You are succesfully logged in to your account
        </h4>
        <button onClick={handleLogin}>Logout</button>
      </div>
    );
  };

  const TernaryOperatorComponent = () => {
    return <div>{isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}</div>;
  };

  const ListComponent = () => {
    const students = [
      {
        student: "Student-1",
        name: "Laxman Reddy",
        rno: "2211cs010133",
        group: "7(A)",
        subjects: ["MERN STACK ", "DM", "OS", "P&S", "ADS", "COA"],
      },
      {
        student: "Student-2",
        name: "Subham Patnaik ",
        rno: "2211cs010546",
        group: "8C",
        subjects: ["MERN STACK ", "DM", " OS", "P&S", "ADS", "OOSE"],
      },
    ];
    return (
      <div>
        <h4>
          {" "}
          Displaying List Example by Rendering 2 Student Details (RollNo, Group,
          Name, Subjects) using map() method.{" "}
        </h4>
        <div className="box">
          {students.map((Student, index) => (
            <div className="cardStyle">
              <div>
                <h5 style={{ textDecorationLine: "underline" }}>
                  {Student.student}
                </h5>
                <h5>{Student.name}</h5>
                <h5>{Student.rno}</h5>
                <h5>{Student.group}</h5>
              </div>
              <h5 style={{ textDecorationLine: "underline" }}>Subjects</h5>
              <div>
                {Student.subjects.map((studentDetails, index) => (
                  <div key={index}>
                    <h5>{studentDetails}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Week6</h3>
      <hr />
      <h4>Displaying Ternary Operators example</h4>
      <TernaryOperatorComponent />
      <hr />
      <ListComponent />
    </div>
  );
};
export default Week6;
