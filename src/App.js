import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/detail/:name">
          <PokemonDetail />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
