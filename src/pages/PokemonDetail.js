import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DATA } from "../graphql/Queries";
import { useLocation } from "react-router-dom";
import PokemonData from "../components/PokemonData";
import SkeletonPokemonData from "../components/SkeletonPokemonData";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState();
  const location = useLocation();
  const pageURL = location.pathname;
  const latURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1).toString();

  const { data } = useQuery(GET_POKEMON_DATA, {
    variables: { name: `${latURLSegment}` },
  });

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
      console.log(data.pokemon);
    }
  }, [data]);

  return (
    <Container>
      <Content>
        {pokemon ? <PokemonData pokemon={pokemon} /> : <SkeletonPokemonData />}
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
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "16px",
  maxWidth: "650px",
  margin: "0px auto",
  marginTop: "60px",
  // minHeight: "100vh",
});

export default PokemonDetail;
