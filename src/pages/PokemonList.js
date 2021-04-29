import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/GetPokemon";

import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  const { error, loading, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 20 },
  });

  useEffect(() => {
    if (data) {
      console.log(data.pokemons.results);
      setPokemons(data.pokemons.results);
    }
  }, [data]);

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
};

export default PokemonList;
