import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Random.css";

import Navbar from "../navbar/Navbar";

import drink from "../../images/3.png";

function Random() {
  const [state, setState] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        console.log(response.data.drinks[0]);
        setState({ ...response.data.drinks[0] });
      } catch (err) {}
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="center">
        <div>
          <img className="drink-fixed-image" src={drink} />
        </div>
        <div className="random-container">
          <h3 id={state.idDrink}>{state.strDrink}</h3>
          <div className="random-topo">
            <img
              id={state.idDrink}
              className="alcoholic-image"
              src={state.strDrinkThumb}
            />
            <div className="tags">
              <p>
                <spam>{state.strAlcoholic}</spam>
              </p>
              <p>
                <spam>{state.strGlass}</spam>
              </p>
            </div>
          </div>
          <h4>Ingredients</h4>
          <ul>
            <li>{state.strIngredient1}</li>
            <li>{state.strIngredient2}</li>
            {state.strIngredient3 ? <li>{state.strIngredient3}</li> : <></>}
          </ul>
          <h4>Instructions</h4>
          <p>{state.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Random;
