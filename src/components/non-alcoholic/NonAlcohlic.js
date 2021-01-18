import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NonAlcoholic.css";

import Navbar from "../navbar/Navbar";

function NonAlcoholic() {
  const [state, setState] = useState([]);
  const [drinkId, setDrinkId] = useState(0);
  const [drinkInfo, setDrinkInfo] = useState({});
  const [display, setDisplay] = useState("drink-info-none");
  const [align, setAlign] = useState("center");
  const [containerAlign, setContainerAlign] = useState(
    "alcoholic-container-center"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );

        setState([...response.data.drinks]);
      } catch (err) {}
    }
    fetchData();
  }, []);

  function drinkClick(event) {
    setDrinkId(event.target.id);
    setDisplay("drink-info-block");
    setContainerAlign("alcoholic-container-start");
    setAlign("start");
  }

  function Close() {
    setDisplay("drink-info-none");
    setContainerAlign("alcoholic-container-center");
    setAlign("center");
  }

  useEffect(() => {
    async function fetchId() {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        console.log(response.data.drinks[0]);
        setDrinkInfo({ ...response.data.drinks[0] });
        console.log(drinkInfo);
      } catch (err) {}
    }
    fetchId();
  }, [drinkId]);

  return (
    <div>
      <Navbar />
      <div className={align}>
        <div className={containerAlign}>
          {state ? (
            state.map((drink) => (
              <div onClick={drinkClick} className="each-drink">
                <h3 id={drink.idDrink}>{drink.strDrink}</h3>
                <img
                  id={drink.idDrink}
                  className="alcoholic-image"
                  src={drink.strDrinkThumb}
                />{" "}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className={display}>
          {drinkInfo ? (
            <div className="drink-info">
              <p className="close-info" onClick={Close}>
                x
              </p>
              <h4>{drinkInfo.strDrink}</h4>
              <p>Ingredients:</p>
              <ul>
                <li>{drinkInfo.strIngredient1}</li>
                <li>{drinkInfo.strIngredient2}</li>
                {drinkInfo.strIngredient3 ? (
                  <li>{drinkInfo.strIngredient3}</li>
                ) : (
                  <></>
                )}
              </ul>

              <p>Instructions: {drinkInfo.strInstructions}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default NonAlcoholic;
