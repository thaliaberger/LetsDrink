import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "../navbar/Navbar";
import homeImage from "../../images/6.png";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <img className="home-image" src={homeImage} />
      </div>
    </div>
  );
}

export default Homepage;
