import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./CardFilter.css";

function StudentCard() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://reddylaxman.github.io/untested/students.json"
      );
      const data = await response.json();
      setStudents(data);
    };
    fetchStudentDetails();
  }, []);
  const handleFilteredStudents = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(value)
    );
    setFilteredStudents(filtered);
  };
  return (
    <div>
      <div style={{ width: "35%", marginTop: "30px", marginLeft: "9%" }}>
        <input
          type="text"
          placeholder="search by name"
          onChange={handleFilteredStudents}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 center">
        {filteredStudents.map((student) => (
          <Card
            className="card"
            style={{
              width: "18rem",
              margin: "6px",
              borderWidth: "0px",
              backgroundColor: "black",
            }}
            text="primary"
          >
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Subtitle className="mb-2 ">{student.rollno}</Card.Subtitle>
              <Card.Text>{student.emailid}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
function EmployeeCard() {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      const response = await fetch(
        "https://reddylaxman.github.io/untested/emp.json"
      );
      const data = await response.json();
      setEmployee(data);
    };
    fetchEmployeeDetails();
  }, []);
  const handleFilteredEmployees = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = employee.filter((emp) =>
      emp.code.toLowerCase().includes(value)
    );
    setFilteredEmployee(filtered);
  };
  return (
    <div>
      <div style={{ width: "35%", marginTop: "30px", marginLeft: "9%" }}>
        <input
          type="text"
          placeholder="search by code"
          onChange={handleFilteredEmployees}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 center">
        {filteredEmployee.map((emp) => (
          <Card
            className="card"
            style={{
              width: "18rem",
              margin: "6px",
              borderWidth: "0px",
              backgroundColor: "black",
            }}
            text="primary"
          >
            <Card.Body>
              <Card.Title>{emp.name}</Card.Title>
              <Card.Subtitle className="mb-2 ">{emp.code}</Card.Subtitle>
              <Card.Text>{emp.designation}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
function FilteredCards() {
  return (
    <div>
      <StudentCard />
      <hr />
      <EmployeeCard />
    </div>
  );
}
export default FilteredCards;
