import React from "react";
import Table from "react-bootstrap/Table";
import "./week2.css";
import "bootstrap/dist/css/bootstrap.min.css";
function MyComponentWithoutJSX() {
  return React.createElement(
    "h1",
    { style: { color: "blue" } },
    "This  component is created without using JSX"
  );
}
function MyComponentWithJSX() {
  const name = "Laxman Reddy";
  const age = 20;
  var cTime = new Date().toTimeString();
  const isLoggedin = false;
  const frag = (
    <>
      <h1 style={{ color: "cyan" }}>Heading 1</h1>
      <p style={{ color: "darkcyan" }}>Paragraph</p>
    </>
  );
  return (
    <div>
      <h1 style={{ color: "maroon" }}>
        This component is created with using JSX
      </h1>
      <div>
        <h2>Example-1: Basic HTML Tags</h2>
        <h1 style={{ color: "orange" }}>HTML TAGS!</h1>
      </div>
      <hr />
      <div>
        <h2>Example-2: Attributes in JSX</h2>
        <h1 style={{ color: "darkmagenta" }}>Attributes in JSX</h1>
        <h2 style={{ color: "chocolate" }}>Welcome to MERN stack classes</h2>
      </div>
      <hr />
      <div>
        <h2>Example-3 : Expressions in JSX</h2>
        <h2 style={{ color: "deepskyblue" }}>I am {name}</h2>
        <h3>I am {age} years old.</h3>
      </div>
      <hr />
      <div>
        <h2>Example-4: Function in JSX</h2>
        <h3>Using time function displaying the current time is {cTime}</h3>
      </div>
      <hr />
      <div>
        <h2>Example-5: Conditional Rendering in JSX</h2>
        <h2 style={{ color: "red" }}>
          {isLoggedin
            ? "Welcome back!!!!"
            : "You don't have account ,Please create account..."}
        </h2>
      </div>
      <hr />
      <div>
        <h2>Example-6: Fragments in JSx</h2>
        <h3>{frag}</h3>
      </div>
      <hr />
      <div>
        <h2>Example-7: Nested Elements in JSX</h2>
        <h1 style={{ color: "magenta" }}>Malla Reddy University</h1>
        <h2 style={{ color: "purple" }}>Department of CSE</h2>
        <p style={{ color: "darkgoldenrod" }}>Welcome to MERN stack classes</p>
      </div>
    </div>
  );
}
function MyFunctionComponent() {
  const studentDetails = [
    {
      sid: "2211cs010133",
      sname: "Laxman Reddy",
      group: "7(A)",
      email: "2211cs010133@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211cs010142",
      sname: "Vamshi Reddy",
      group: "4",
      email: "2211cs010142@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211cs010145",
      sname: "Navadeep Reddy",
      group: "4",
      email: "2211cs010145@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211cs010178",
      sname: "Jashwanth Reddy",
      group: "4",
      email: "2211cs010178@mallareddyuniversity.ac.in",
    },
  ];
  return (
    <div className="center">
      <h2>Student Details </h2>
      <Table striped bordered hover variant>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Group</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr data-index={index}>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.group}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

class MyClassComponent extends React.Component {
  render() {
    const empDetails = [
      {
        ename: "Anand Sai Laxman",
        subject: "Mathemetics",
        dept: "CSE",
        years: "12 years",
      },
      {
        ename: "Deva",
        subject: "Workshop",
        dept: "MEC",
        years: "No Experience",
      },
      {
        ename: "Vikram Aditya",
        subject: "HVPE",
        dept: "CSE",
        years: "3 years",
      },
      {
        ename: "Siddharth Nandan Saaho",
        subject: "Auto Mobiles",
        dept: "MEC",
        years: "5 years",
      },
    ];
    return (
      <div className="center">
        <h2>Employee Details</h2>
        <Table striped bordered hover variant>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Subject</th>
              <th>Department</th>
              <th>Teaching Experience</th>
            </tr>
          </thead>
          <tbody>
            {empDetails.map((emp, index) => (
              <tr data-index={index}>
                <td>{emp.ename}</td>
                <td>{emp.subject}</td>
                <td>{emp.dept}</td>
                <td>{emp.years}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function Week2() {
  return (
    <div>
      <h1>Week-2: Create React App with Components </h1>
      <hr />
      <h1>QNo.1: Displaying My Component Without uisng JSX</h1>
      <MyComponentWithoutJSX />
      <hr />
      <h1>QNo.2: Displaying My Component With uisng JSX</h1>
      <MyComponentWithJSX />
      <hr />
      <h1>QNo.3: Displaying My Function Component </h1>
      <MyFunctionComponent />
      <hr />
      <h1>QNo.4: Displaying My Class Component </h1>
      <MyClassComponent />
    </div>
  );
}
export default Week2;
