import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import cardProfile from "./images/profile.png";
import "./week5.css";

function StudentCard() {
  const [students, fetchDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://reddylaxman.github.io/untested/students.json"
      );

      const data = await response.json();

      console.log(data);

      fetchDetails(data);
    };

    fetchStudentDetails();
  }, []);
  return (
    <div className="row col-sm-12 g-4  center">
      <h4 style={{ textDecorationLine: "underline" }}>
        Student Cards details fetched from{" "}
        <a
          href="https://reddylaxman.github.io/untested/students.json"
          style={{ color: "red" }}
        >
          https://reddylaxman.github.io/untested/students.json
        </a>
      </h4>
      {students.slice(0, 5).map((studentCard, index) => (
        <Card
          className="card"
          style={{
            width: "15rem",
            margin: "6px",
            borderWidth: "0px",
            backgroundColor: "black",
          }}
          text="primary"
        >
          <Card.Img variant="top" src={cardProfile} />
          <Card.Body>
            <Card.Title>{studentCard.name}</Card.Title>
            <Card.Subtitle className="mb-2 ">
              {studentCard.rollno}
            </Card.Subtitle>
            <Card.Text>{studentCard.emailid}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
function Week5() {
  return (
    <div>
      <StudentCard />
    </div>
  );
}
export default Week5;
