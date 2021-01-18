import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import Alcoholic from "./components/alcoholic/Alcoholic";
import NonAlcoholic from "./components/non-alcoholic/NonAlcohlic";
import Search from "./components/search/Search";
import Random from "./components/random/Random";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/alcoholic" component={Alcoholic} />
          <Route exact path="/nonalcoholic" component={NonAlcoholic} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
