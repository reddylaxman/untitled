import React from "react";
import Table from "react-bootstrap/Table";
import "./week3.css";
import "bootstrap/dist/css/bootstrap.min.css";
function PropsComponentWithOneAttribute(props) {
  return (
    // className="component width "
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Rendering a single attribute to props
      </h4>
      <h4 style={{ color: "blue" }}>
        My Favorite Colour is{" "}
        <span style={{ color: "black" }}>{props.color}</span>
      </h4>
    </div>
  );
}
function PropsComponentWithMultiAttribute(props) {
  return (
    // className="component width"
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Rendering multiple attribute to props
      </h4>
      <h4 style={{ color: "darkblue" }}>
        I am <span style={{ color: "red" }}>{props.name}</span>
      </h4>
      <h4 style={{ color: "green" }}>
        My Roll Number is{" "}
        <span style={{ color: "orangered" }}>{props.rno}</span>
      </h4>
    </div>
  );
}
function StudentDetails(props) {
  const student = props.student;
  return (
    // className="component width"
    <div className="table-width">
      <h3 style={{ textDecorationLine: "underline" }}>
        Student Details using Props{" "}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.semail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function EmpDetails(props) {
  const employee = props.employee;
  return (
    // className="component width"
    <div className="table-width">
      <h3 style={{ textDecorationLine: "underline" }}>
        Employee Details using Props{" "}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name of the Employee</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function StudentDetailsObjectDestruction(props) {
  const student = props.student;
  return (
    // className="component width"
    <div className="table-width">
      <h3 style={{ textDecorationLine: "underline" }}>
        Student details using Object Destruction{" "}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Hall Ticket No</th>
            <th>Name of the Student</th>
            <th>Email</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.htno}</td>
              <td>{student.name}</td>
              <td>{student.mailid}</td>
              <td>{student.mobileno}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function Week3() {
  const studentObj = [
    {
      htno: "2989",
      name: "Kalki",
      mailid: "projectk@gmail.com",
      mobileno: "2898289824",
    },
    {
      htno: "176",
      name: "Uday",
      mailid: "oy@gmail.com",
      mobileno: "999999999",
    },
    {
      htno: "3",
      name: "Ram",
      mailid: "jananiram@gmail.com",
      mobileno: "333333333",
    },
  ];
  const student = [
    { sid: "cs133", sname: "Laxman Reddy", semail: "laxmanreddy@gmail.com" },
    { sid: "cs109", sname: "Deva", semail: "salaardeva@gmail.com" },
    { sid: "cs322", sname: "Vikram Aditya", semail: "aditya@gmail.com" },
    {
      sid: "cs064",
      sname: "Siddharth Nandan Saaho",
      semail: "namesaaho@gmail.com",
    },
  ];
  const emp = [
    { eid: "e123", ename: "Varadha Raj", designation: "HOD" },
    {
      eid: "e035",
      ename: "Ashok Chakravarthy",
      designation: "Asst Professor",
    },
    { eid: "e3/9", ename: "Rocky", designation: "CEO" },
    {
      eid: "e2989",
      ename: "Kalki",
      designation: "HR",
    },
  ];
  return (
    // className="body-component"
    <div>
      <h4>Displaying one & multiple attribute using props</h4>
      <PropsComponentWithOneAttribute color="Black" />
      <br />
      <PropsComponentWithMultiAttribute
        name="Laxman Reddy"
        rno="2211cs010133"
      />
      <hr />
      <h4>Displaying student details using props</h4>
      <StudentDetails student={student} />
      <hr />
      <h4>
        Displaying using props through classes display employee details (Emp-id,
        Emp-Name, Emp-Designation) on the webpage.
      </h4>
      <EmpDetails employee={emp} />
      <hr />
      <h4>
        Displaying Student details which vary in htno, name, mailid, and
        mobileno to users.
      </h4>
      <StudentDetailsObjectDestruction student={studentObj} />
    </div>
  );
}
export default Week3;
