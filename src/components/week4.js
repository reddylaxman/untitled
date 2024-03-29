import React, { useState, useEffect } from "react";
import "./week4.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
const UseEffectExample1 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    //console.log(count);
    console.log('"constraint-1"');
  });

  return (
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Displaying Use effect example using only call back
      </h4>
      <p>
        you clicked {count} times{console.log("Inside Component....")}{" "}
      </p>

      <button onClick={() => setcount(count + 1)}>increment</button>
    </div>
  );
};
const UseEffectExample2 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    //console.log(count);
    console.log('"constraint-2"');
  }, []);

  return (
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Displaying Use effect example using empty dependency
      </h4>
      <p>
        you clicked {count} times{console.log("Inside Component....")}{" "}
      </p>

      <button onClick={() => setcount(count + 1)}>increment</button>
    </div>
  );
};
const UseEffectExample3 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    //console.log(count);

    console.log('"constraint-3"');
  }, [count]);

  return (
    <div>
      <h4 style={{ textDecorationLine: "underline" }}>
        Displaying useEffect triggers based on state variable or props
      </h4>
      <p>
        you clicked {count} times{console.log("Inside Component....")}{" "}
      </p>

      <button onClick={() => setcount(count + 1)}>increment</button>
    </div>
  );
};
function Week4() {
  return (
    // className="body-component"
    <div>
      <UseStateExample />
      <br />
      <hr />
      <UseEffectExample1 />
      <hr />
      <UseEffectExample2 />
      <hr />
      <UseEffectExample3 />
    </div>
  );
}
export default Week4;
