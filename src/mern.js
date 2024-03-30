import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Week1 from "./components/week1";
import Week2 from "./components/Week2";
import Week3 from "./components/Week3";
import Week4 from "./components/week4";
import Week5 from "./components/week5";
import Week6 from "./components/week6";
import FilteredCards from "./components/CardFilter";
import "./mern.css";
import Navbar from "react-bootstrap/Navbar";
function ReactRouting() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <h1>Welcome to My React Application</h1>
          <hr />

          <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#">MERN STACK</Navbar.Brand>

            <button className="button-style">
              <Link to="Week1">Week1</Link>
            </button>
            <button className="button-style">
              <Link to="Week2">Week2</Link>
            </button>
            <button className="button-style">
              <Link to="Week3">Week3</Link>
            </button>
            <button className="button-style">
              <Link to="Week4">Week4</Link>
            </button>
            <button className="button-style">
              <Link to="Week5">Week5</Link>
            </button>
            <button className="button-style">
              <Link to="Week6">Week6</Link>
            </button>

            <button className="button-style">
              <Link to="FilteredCards">Filtered Cards</Link>
            </button>
          </Navbar>
        </div>
        <hr />
        <Routes>
          <Route path="/Week1" element={<Week1 />}></Route>
          <Route path="/Week2" element={<Week2 />}></Route>
          <Route path="/Week3" element={<Week3 />}></Route>
          <Route path="/Week4" element={<Week4 />}></Route>
          <Route path="/Week5" element={<Week5 />}></Route>
          <Route path="/Week6" element={<Week6 />}></Route>

          <Route path="/FilteredCards" element={<FilteredCards />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default ReactRouting;
