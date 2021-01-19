import React from "react";
import "./About.css";

import Navbar from "../navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <p className="about">
          Web App developed by{" "}
          <a href="https://github.com/thaliaberger" target="_blank">
            Thalía Berger
          </a>
          , using{" "}
          <a href="https://www.thecocktaildb.com/api.php" target="_blank">
            TheCocktailDB API
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
