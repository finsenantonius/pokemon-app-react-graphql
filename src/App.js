import React from "react";
import { Route } from "react-router-dom";

import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <main>
      <Route exact path="/">
        <PokemonList />
      </Route>
    </main>
  );
}

export default App;
