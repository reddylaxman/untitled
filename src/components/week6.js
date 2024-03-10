import React, { useState } from "react";
import "./week6.css";
const Week6 = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState("default");
  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  const LoginComponent = () => {
    return (
      // className="body-component"
      <div>
        <h4 style={{ color: "peru" }}>
          Displaying Ternary Operators component
        </h4>
        <h5 style={{ color: "red" }}>Please, Login </h5>
        <h5 style={{ color: "blue" }}>This is Login Component</h5>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  const WelcomeComponent = () => {
    return (
      // className="body-component"
      <div>
        <h4 style={{ color: "peru" }}>
          Displaying Ternary Operators component
        </h4>
        <h5 style={{ color: "tomato" }}>Welcome back </h5>
        <h5 style={{ color: "teal" }}>This is Welcome Component</h5>
        <button onClick={handleLogin}>Logout</button>
      </div>
    );
  };
  const LogicalOperatorComponent = () => {
    const WelcomeComponent = () => {
      return (
        <div>
          <h4 style={{ color: "magenta" }}>
            You are successfully logged in{" "}
            <span style={{ color: "blue" }}>Laxman Reddy</span>
          </h4>
        </div>
      );
    };
    return <div>{isLoggedIn && <WelcomeComponent />}</div>;
  };
  const TernaryOperatorComponent = () => {
    return <div>{isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}</div>;
  };
  const ifElseOperatorComponent = (isLoggedIn) => {
    const LoginComponent = () => {
      return (
        // className="body-component"
        <div>
          <h4 style={{ color: "peru" }}>
            Displaying IF- ElSE Condition component
          </h4>
          <h5 style={{ color: "red" }}>Please, Login </h5>
          <h5 style={{ color: "blue" }}>This is Login Component</h5>
        </div>
      );
    };
    const WelcomeComponent = () => {
      return (
        // className="body-component"
        <div>
          <h4
            style={{
              color: "peru",
            }}
          >
            Displaying IF- ElSE Condition component
          </h4>
          <h5 style={{ color: "tomato" }}>Welcome back </h5>
          <h5 style={{ color: "teal" }}>This is Welcome Component</h5>
        </div>
      );
    };
    if (isLoggedIn) {
      return <WelcomeComponent />;
    } else {
      return <LoginComponent />;
    }
  };

  const SwitchComponent = () => {
    const DefaultComponent = () => {
      const handleUser = () => {
        setActiveComponent("user");
      };
      const handleAdmin = () => {
        setActiveComponent("admin");
      };
      return (
        <div>
          <h4 style={{ color: "palevioletred" }}>
            This is Default Dashboard component
          </h4>
          <button onClick={handleUser}>Switch to User</button>{" "}
          <button onClick={handleAdmin}>Switch to Admin</button>
        </div>
      );
    };
    const AdminComponent = () => {
      const handleUser = () => {
        setActiveComponent("user");
      };
      const handleDefault = () => {
        setActiveComponent("default");
      };

      return (
        <div>
          <h4 style={{ color: "palevioletred" }}>This is Admin Component</h4>
          <button onClick={handleUser}>Switch to User</button>{" "}
          <button onClick={handleDefault}>Switch to Default</button>
        </div>
      );
    };
    const UserComponent = () => {
      const handleAdmin = () => {
        setActiveComponent("admin");
      };
      const handleDefault = () => {
        setActiveComponent("default");
      };
      return (
        <div>
          <h4 style={{ color: "palevioletred" }}>This is User Component</h4>
          <button onClick={handleDefault}>Switch to Default</button>{" "}
          <button onClick={handleAdmin}>Switch to Admin</button>
        </div>
      );
    };

    switch (activeComponent) {
      case "admin":
        return <AdminComponent />;
      case "user":
        return <UserComponent />;
      default:
        return <DefaultComponent />;
    }
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
      // className="body-component "
      <div>
        <h4 style={{ color: "peru" }}>
          Renderings 2 Student Details ( Name,RollNo, Group, Subjects) using
          map() method.
        </h4>
        <div className="box">
          {students.map((Student, index) => (
            <div className="center body-card">
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
    // className="component width"
    // className="body-component"
    // className="body-component"
    <div>
      <TernaryOperatorComponent />
      <hr />
      <div>
        <h4 style={{ color: "peru" }}>Displaying Logical operator component</h4>
        <LogicalOperatorComponent />
      </div>
      <hr />
      {ifElseOperatorComponent(isLoggedIn)}
      <hr />
      <div>
        <h4 style={{ color: "peru" }}>Displaying Switch Case Component</h4>
        {SwitchComponent()}
      </div>
      <hr />
      <ListComponent />
      <br />
    </div>
  );
};
export default Week6;
