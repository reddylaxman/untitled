import React, { useState, useEffect } from "react";
import "./week4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
function UseStateExample() {
  const name = null;
  const rno = null;
  const [details, setDetails] = useState(
    <div>
      <h5>Name: {name}</h5>
      <h5>Roll No: {rno}</h5>
    </div>
  );
  const getDetails = () => {
    const name = "Laxman Reddy";
    const rno = "2211cs010133";
    setDetails(
      <div>
        <h5>Name: {name}</h5>
        <h5>Roll No: {rno}</h5>
      </div>
    );
  };
  return (
    // className="component width"
    // className="body-component-function"
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Displaying Use State Example
      </h4>

      <div>
        <h4>{details}</h4>

        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
  const headings = ["SNO", "Name of the student", "Roll No", "Email ID"];
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );

      const data = await response.json();

      console.log(data);

      setDetails(data);
    };

    fetchStudentDetails();
  }, []);

  return (
    // className="component width"
    // className="body-component-function"
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Displaying Use effect example by fetching data from student.json
      </h4>

      <div className="table-width">
        <Table striped bordered hover variant="danger">
          <thead>
            <tr>
              {headings.map((h, index) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Details.slice(0, 5).map((student, index) => (
              <tr>
                <td>{index + 1}</td>
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
    // className="body-component"
    <div>
      <UseStateExample />
      <br />
      <hr />
      <UseEffectExample />
    </div>
  );
}
export default Week4;
