import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import Crop from "./Crop";
import Resize from "./Resize";
import Compressor from "./Compressor";
import Enhancer from "./Enhancer";
const NavbarComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={{ paddingBottom: "3rem" }}>
          <ResponsiveNavbar
            logo={<h4>ReClick</h4>}
            styles={{
              navigationBarLarge: {
                backgroundColor: "#333333",
                color: "wheat",
              },
              navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
              navigationBarSmall: {
                backgroundColor: "#333333",
                color: "wheat",
              },
              navigationCardSmall: {
                backgroundColor: "#333333",
                color: "wheat",
              },
            }}
          >
            {" "}
            <ul>
              <li>
                <Nav.Link as={Link} to="/Home">
                  Crop
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/About">
                  ReSize
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/Gallery">
                  Compressor
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/Contact">
                  Enhancer
                </Nav.Link>
              </li>
            </ul>
          </ResponsiveNavbar>
        </div>
        <Routes>
          <Route path="/Home" element={<HomeComponent />}></Route>
          <Route path="/About" element={<AboutComponent />}></Route>
          <Route path="/Gallery" element={<GalleryComponent />}></Route>
          <Route path="/Contact" element={<ContactComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavbarComponent;
