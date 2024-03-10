import React from "react";
import Table from "react-bootstrap/Table";
import "./week2.css";
import "bootstrap/dist/css/bootstrap.min.css";
function MyComponentWithoutJSX() {
  return React.createElement(
    "h5",
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
      <h6 style={{ color: "cyan" }}>Heading 1</h6>
      <p style={{ color: "darkcyan" }}>Paragraph</p>
    </>
  );
  return (
    <div>
      <h5 style={{ color: "maroon" }}>
        This component is created with using JSX
      </h5>
      <div>
        <h5>Example-1: Basic HTML Tags</h5>
        <h6 style={{ color: "orange" }}>HTML TAGS!</h6>
      </div>
      <hr />
      <div>
        <h5>Example-2: Attributes in JSX</h5>
        <h6 style={{ color: "darkmagenta" }}>Attributes in JSX</h6>
        <h6 style={{ color: "chocolate" }}>Welcome to MERN stack classes</h6>
      </div>
      <hr />
      <div>
        <h5>Example-3 : Expressions in JSX</h5>
        <h6 style={{ color: "deepskyblue" }}>I am {name}</h6>
        <h6>I am {age} years old.</h6>
      </div>
      <hr />
      <div>
        <h5>Example-4: Function in JSX</h5>
        <h6>Using time function displaying the current time is {cTime}</h6>
      </div>
      <hr />
      <div>
        <h5>Example-5: Conditional Rendering in JSX</h5>
        <h6>
          {isLoggedin
            ? "Welcome back!!!!"
            : "You don't have account ,Please create account..."}
        </h6>
      </div>
      <hr />
      <div>
        <h5>Example-6: Fragments in JSx</h5>
        <h6>{frag}</h6>
      </div>
      <hr />
      <div>
        <h5>Example-7: Nested Elements in JSX</h5>
        <h6>Malla Reddy University</h6>
        <h7>Department of CSE</h7>
        <p>Welcome to MERN stack classes</p>
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
    },
    {
      sid: "2211cs010142",
      sname: "Vamshi Reddy",
      group: "4",
    },
  ];
  return (
    <div className="table-width">
      <h5>Student Details </h5>
      <Table striped bordered hover variant>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr data-index={index}>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.group}</td>
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
      },

      {
        ename: "Siddharth Nandan Saaho",
        subject: "Auto Mobiles",
        dept: "MEC",
      },
    ];
    return (
      <div className="table-width">
        <h5>Employee Details</h5>
        <Table striped bordered hover variant>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Subject</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {empDetails.map((emp, index) => (
              <tr data-index={index}>
                <td>{emp.ename}</td>
                <td>{emp.subject}</td>
                <td>{emp.dept}</td>
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
      <h4>Displaying My Component Without using JSX</h4>
      <MyComponentWithoutJSX />
      <hr />
      <h4>Displaying My Component With using JSX</h4>
      <MyComponentWithJSX />
      <hr />
      <h5>Displaying My Function Component </h5>
      <MyFunctionComponent />
      <hr />
      <h5> Displaying My Class Component </h5>
      <MyClassComponent />
    </div>
  );
}
export default Week2;
