import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 Error - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
