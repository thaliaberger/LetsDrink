import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

import Navbar from "../navbar/Navbar";

import bottles from "../../images/7.png";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("search.php?s=");
  const [state, setState] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState("search-display-none");
  const [buttonDisplay, setButtonDisplay] = useState("search-button-block");

  console.log(inputValue);

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
      <div className={searchDisplay}>
        {state ? (
          state.map((drink) => (
            <div key={drink.idDrink} className="each-drink">
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
  );
}

export default Search;
