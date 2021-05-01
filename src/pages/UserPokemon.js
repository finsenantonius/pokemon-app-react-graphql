import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { PokemonContext } from "../context/PokemonContext";
import UserPokemonCard from "../components/UserPokemonCard";

const UserPokemon = () => {
  const { countPokemonOwned } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("_user_pokemon");
    setPokemons(localData ? JSON.parse(localData) : []);
  }, []);

  const releasePokemon = (nickname, pokemonName) => {
    const filtered = pokemons.filter(
      (pokemon) => pokemon.nickname !== nickname
    );
    localStorage.setItem("_user_pokemon", JSON.stringify(filtered));
    setPokemons(filtered);
    countPokemonOwned(pokemonName, "subtract");
  };

  return (
    <Container>
      <Content>
        <h3>Total Owned: {pokemons.length}</h3>
        {pokemons &&
          pokemons.map((pokemon) => (
            <UserPokemonCard
              pokemon={pokemon}
              releasePokemon={releasePokemon}
              key={pokemon.nickname}
            />
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.section({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
});

const Content = styled.div({
  width: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "16px",
  maxWidth: "650px",
  marginTop: "60px",
});

export default UserPokemon;
