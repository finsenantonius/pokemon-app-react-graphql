import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import UserPokemon from "./pages/UserPokemon";

import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <main>
      <PokemonProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/detail/:name">
            <PokemonDetail />
          </Route>
          <Route path="/my-pokemon">
            <UserPokemon />
          </Route>
        </Switch>
      </PokemonProvider>
    </main>
  );
}

export default App;
