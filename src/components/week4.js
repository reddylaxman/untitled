import React, { useState, useEffect } from "react";
import "./week4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
function UseStateExample() {
  const [details, setDetails] = useState(
    <div>
      <h3>Name: No name</h3>
      <h3>Roll No: Not registered</h3>
    </div>
  );
  const getDetails = () => {
    setDetails(
      <div>
        <h3>Name: Laxman Reddy</h3>
        <h3>Roll No: 2211cs010133</h3>
      </div>
    );
  };
  return (
    <div className="component width">
      <h2>
        1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h2>
      <h2 style={{ textDecorationLine: "underline" }}>Use State Example</h2>
      <div className="body-component-function">
        <h3>{details}</h3>

        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://sindhuravuri666.github.io/StudentList/StudentList.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);
  return (
    <div className="component width">
      <h2>
        2. Create a React Component, Display student Hall-ticket, Name and
        Email-Id using useEffect() fetch student info from student.json.
      </h2>

      <h3 style={{ color: "blue" }}>
        student.json url is
        <span style={{ color: "magenta" }}>
          {" "}
          <a
            href="https://sindhuravuri666.github.io/StudentList/StudentList.json"
            style={{ color: "red" }}
          >
            https://sindhuravuri666.github.io/StudentList/StudentList.json
          </a>
          <h3>click the above link to open student.json data</h3>
        </span>
      </h3>
      <h2 style={{ textDecorationLine: "underline" }}>
        Use effect example by fetching data from student.json
      </h2>
      <div className="body-component-function">
        <Table striped bordered hover variant="danger">
          <thead>
            <th>Name of the Student</th>
            <th>Roll No</th>
            <th>Email Id</th>
          </thead>
          <tbody>
            {Details.map((student) => (
              <tr>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.EmailID}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
function Week4() {
  return (
    <div className="body-component">
      <h2>
        Week 4 - Create React App and Implement API Calls using React Hooks
      </h2>
      <hr />
      <UseStateExample />
      <br />
      <UseEffectExample />
    </div>
  );
}
export default Week4;
