import React from "react";
import asl from "./images/asl.jpg";
function Week1() {
  return (
    <div>
      <h3>Hello World</h3>
      <hr />
      <h3>Name: Laxman Reddy</h3>
      <h3>Roll No: 2211cs010133 </h3>
      <h3>Group: 7(A)</h3>
      <hr />
      <img
        src={asl}
        style={{ width: "200px", height: "200px", borderRadius: " 50% " }}
        alt="Laxman Reddy"
      />
      <p>
        I am Laxman Reddy. I am presently pursuing B.tech in Malla Reddy
        University
      </p>
    </div>
  );
}
export default Week1;
