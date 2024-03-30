import { useState } from "react";
import "./sidebar.css";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import back from "./images/button.png";
import AboutComponent from "./Week7/About";
import ContactComponent from "./Week7/Contact";
import GalleryComponent from "./Week7/Gallery";
import HomeComponent from "./Week7/Home";
function Sidebar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <aside className={`sidebar ${isHover ? "active" : ""}`}>
          <div className="open-btn" onClick={() => setIsHover((prev) => !prev)}>
            <span className="material-symbols-outlined">
              <img
                src={back}
                style={{
                  width: "2rem",
                  height: "2rem",
                  transform: isHover ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </span>
          </div>
          <div className="wrapper">
            <div className="top__wrapper">
              <div className="header">
                <span className="header-logo"></span>
                <div className="header-details">
                  <h4>Logo</h4>
                </div>
              </div>
              <div className="search-box">
                <span className=" material-symbols-outlined search-icon">
                  search
                </span>
                <input type="text" name="searchBox" placeholder="Search..." />
              </div>
              <nav className="sidebar-nav">
                <ul className="nav-menu">
                  <Nav.Link as={Link} to="/Home">
                    Crop
                  </Nav.Link>

                  <Nav.Link as={Link} to="/About">
                    ReSize
                  </Nav.Link>

                  <Nav.Link as={Link} to="/Gallery">
                    Compressor
                  </Nav.Link>

                  <Nav.Link as={Link} to="/Contact">
                    Enhancer
                  </Nav.Link>
                </ul>
              </nav>{" "}
            </div>
          </div>{" "}
        </aside>
        <Routes>
          <Route path="/Home" element={<HomeComponent />}></Route>
          <Route path="/About" element={<AboutComponent />}></Route>
          <Route path="/Gallery" element={<GalleryComponent />}></Route>
          <Route path="/Contact" element={<ContactComponent />}></Route>
        </Routes>
      </div>{" "}
    </BrowserRouter>
  );
}

export default Sidebar;
