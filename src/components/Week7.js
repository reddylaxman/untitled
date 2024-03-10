import React, { useState } from "react";

const NormalFunction = () => {
  function handleFunction() {
    console.log("Using function button clicked");
  }
  return (
    <div>
      <h4> Example-1: Displaying using Normal Function component</h4>
      <button onClick={handleFunction}>Function </button>
    </div>
  );
};
const ArrowFunction = () => {
  const handleArrowFunction = () => {
    console.log("Using arrow function button clicked");
  };
  return (
    <div>
      <h4> Example-2: Displaying using Arrow Function component</h4>
      <button onClick={handleArrowFunction}>Arrow Function </button>
    </div>
  );
};
const ParameterFunction = () => {
  const handleParameterfunction = (msg) => {
    return console.log("Parameter passing through the function: " + msg);
  };
  return (
    <div>
      <h4> Example-3: Displaying using Parameterized function component</h4>
      <button onClick={() => handleParameterfunction("I am Laxman Reddy")}>
        Parameterized function
      </button>
    </div>
  );
};
const EventListener = () => {
  const handleOnClick = () => {
    console.log("button clicked");
  };
  const [value, setValue] = useState([]);
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault(value);
    console.log("Form submmited with value: " + value);
  };
  return (
    <div>
      <h4>
        {" "}
        Example-4: Displaying using onClick,onChange and onSubmit Event Handling
        componentt
      </h4>

      <button onClick={handleOnClick}>Click</button>
      <input type="text" onChange={handleOnChange} />
      <form onSubmit={handleOnSubmit}>
        <button type="submit" value={value}>
          submit
        </button>
      </form>
    </div>
  );
};
const NameComponent = () => {
  const [name, setName] = useState([]);
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault(name);
    console.log("Entered Name: " + name);
  };
  return (
    <div>
      <h4>
        {" "}
        Example-5: Displaying using onChange and onClick Event Handling
        component{" "}
      </h4>
      <h4>Display Name Based on input through onChange Event...</h4>
      <label></label>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleOnChange}
        value={name}
      />
      <form onSubmit={handleOnSubmit}>
        <button type="submit" value={name}>
          submit
        </button>
      </form>
      <h4>
        I am <span style={{ color: "blue" }}>{name}</span>{" "}
      </h4>
    </div>
  );
};
const DropDownEventHandler = () => {
  const [value, setValue] = useState([]);
  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };
  const [value2, setValue2] = useState(["black", " red", " blue"]);
  const handleSelectChange2 = (e) => {
    setValue2(e.target.value);
  };
  return (
    <div>
      <h4> Example-6: Displaying using Dropdown Event Handling component</h4>
      <label>select favorite color: </label>
      <select onChange={handleSelectChange} value={value}>
        <option value="">Select</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>

      <h4 style={{ color: "magenta" }}>
        You have selected:{" "}
        {value && <span style={{ color: value }}>{value}</span>}
      </h4>
      <hr />
      <label>select favorite color: </label>
      <select onChange={handleSelectChange2}>
        <option value="black,red,blue">select</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <h4>You are selected: {value2}</h4>
    </div>
  );
};
const CheckBoxEventHandler = () => {
  const [isChecked, setValue] = useState(false);
  function handleCheckChange() {
    setValue(!isChecked);
  }
  return (
    <div>
      <h4> Example-7: Displaying using Checkbox Event Handling component</h4>
      <label>
        <input
          type="checkbox"
          id="myCheck"
          value="true"
          onChange={handleCheckChange}
        />
        Checkbox
      </label>
      <h4>
        Checkbox is{" "}
        <span style={{ color: "royalblue" }}>
          {isChecked ? "unchecked" : "checked"}
        </span>
      </h4>
    </div>
  );
};
const RadioEventHandler = () => {
  const [gender, setGender] = useState([]);
  function handleRadioChange(e) {
    setGender(e.target.value);
  }
  return (
    <div>
      <h4> Example-8: Displaying using Radio Event handling component </h4>
      <label>
        Gender
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={handleRadioChange}
        />
        Male
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={handleRadioChange}
        />
        Female
      </label>
      <h4>
        Selected gender: <span style={{ color: "red" }}>{gender}</span>
      </h4>
    </div>
  );
};
function Week7() {
  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>Event Handlers</h3>
      <NormalFunction />
      <hr />
      <ArrowFunction />
      <hr />
      <ParameterFunction />
      <hr />
      <EventListener />
      <hr />
      <NameComponent />
      <hr />
      <DropDownEventHandler />
      <hr />
      <CheckBoxEventHandler />
      <hr />
      <RadioEventHandler />
    </div>
  );
}
export default Week7;
