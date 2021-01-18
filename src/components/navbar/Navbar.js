import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="links">
        <Link className="link" to="">
          HOME
        </Link>{" "}
        |
        <Link className="link" to="/alcoholic">
          ALCOHOLIC
        </Link>
        |
        <Link className="link" to="/nonalcoholic">
          NON ALCOHOLIC
        </Link>{" "}
      </div>
      <h1>LET´S DRINK</h1>
      <div className="links">
        <Link className="link" to="/search">
          SEARCH
        </Link>{" "}
        |
        <Link className="link" to="/random">
          RANDOM
        </Link>{" "}
        |
        <Link className="link" to="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
