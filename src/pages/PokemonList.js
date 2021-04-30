import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/Queries";

import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  const { data } = useQuery(GET_POKEMONS, {
    variables: { limit: 20 },
  });

  useEffect(() => {
    if (data) {
      console.log(data.pokemons.results);
      setPokemons(data.pokemons.results);
    }
  }, [data]);

  return (
    <Container>
      <Content>
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
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

export default PokemonList;
