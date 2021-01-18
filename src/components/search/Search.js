import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

import Navbar from "../navbar/Navbar";

import bottles from "../../images/7.png";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("search.php?s=");
  const [state, setState] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState("search-display-none");
  const [buttonDisplay, setButtonDisplay] = useState("search-button-block");
  const [drinkId, setDrinkId] = useState(0);
  const [drinkInfo, setDrinkInfo] = useState({});
  const [display, setDisplay] = useState("drink-info-none");
  const [align, setAlign] = useState("center");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/${selectValue}${inputValue}`
        );
        setState([...response.data.drinks]);
      } catch (err) {}
    }
    fetchData();
  }, [inputValue, selectValue]);

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

  function handleInput(event) {
    setInputValue(event.target.value);
    // inputValue === ""
    //   ? setSearchDisplay("search-display-none")
    //   : setSearchDisplay("search-display-block");
  }

  function handleSelect(event) {
    setSelectValue(event.target.value);
  }

  function handleClick() {
    setSearchDisplay("search-display-block");
    setButtonDisplay("search-button-none");
  }

  function drinkClick(event) {
    setDrinkId(event.target.id);
    setDisplay("drink-info-block");
    setAlign("start");
    setSearchDisplay("search-display-start");
  }

  function Close() {
    setDisplay("drink-info-none");
    setAlign("center");
    setSearchDisplay("search-display-block");
  }

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <img src={bottles} />
        <div className="inputs">
          <select onChange={handleSelect} className="search-select">
            <option value="search.php?s=">Cocktail's name</option>
            <option value="filter.php?i=">Ingredient</option>
          </select>
          <input
            placeholder="Search..."
            onChange={handleInput}
            className="search-input"
            type="text"
          />
        </div>
        <button onClick={handleClick} className={buttonDisplay}>
          GO
        </button>
      </div>
      <div className={align}>
        <div className={searchDisplay}>
          {state ? (
            state.map((drink) => (
              <div
                onClick={drinkClick}
                key={drink.idDrink}
                className="each-drink"
              >
                <h3 id={drink.idDrink}>{drink.strDrink}</h3>
                <img
                  id={drink.idDrink}
                  className="alcoholic-image"
                  src={drink.strDrinkThumb}
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
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
  );
}

export default Search;
