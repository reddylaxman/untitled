import React from "react";
import asl from "./images/asl.jpg";
function Week1() {
  return (
    <div>
      <div>
        <h1>Hello World</h1>
      </div>
      <hr />
      <div>
        <h1>Name: Laxman Reddy</h1>
        <h1>Roll No: 2211cs010133 </h1>
        <h1>Group: 7(A)</h1>
      </div>
      <hr />
      <div>
        <img
          src={asl}
          style={{ width: "200px", height: "200px", borderRadius: " 50% " }}
        />
        <h1>I am Laxman Reddy</h1>
        <h1>I am pursuing B.tech in Malla Reddy University</h1>
        <h1>My hobbies are listening to music</h1>
      </div>
    </div>
  );
}
export default Week1;
