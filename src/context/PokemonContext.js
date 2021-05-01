import React, { useEffect, useState, createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/Queries";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const LIMIT = 30;
  const { data } = useQuery(GET_POKEMONS, {
    variables: { limit: LIMIT },
  });

  useEffect(() => {
    if (data) {
      const items = data.pokemons.results.map((item) => ({
        ...item,
        ownedTotal: 0,
      }));
      setPokemons(items);
    }
  }, [data]);

  const countPokemonOwned = (name, type) => {
    const pokemonArray = pokemons;
    let index = pokemonArray.findIndex((obj) => obj.name === name);
    if (type === "add") {
      pokemonArray[index].ownedTotal += 1;
    } else {
      pokemonArray[index].ownedTotal -= 1;
    }
    setPokemons(pokemonArray);
  };

  return (
    <PokemonContext.Provider value={{ pokemons, countPokemonOwned }}>
      {children}
    </PokemonContext.Provider>
  );
};
