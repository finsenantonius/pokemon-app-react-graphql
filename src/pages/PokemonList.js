import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
// import { useQuery } from "@apollo/client";
// import { GET_POKEMONS } from "../graphql/Queries";
import { PokemonContext } from "../context/PokemonContext";

import Skeleton from "react-loading-skeleton";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
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
