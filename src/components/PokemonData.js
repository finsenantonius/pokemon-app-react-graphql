import React from "react";
import styled from "@emotion/styled";
import TypesTag from "../components/TypesTag";
import PokemonStats from "../components/PokemonStats";

const PokemonData = ({ pokemon }) => {
  const pokemonMoves = pokemon.moves.slice(0, 5);
  const firstLetter = pokemon.name.charAt(0).toUpperCase();
  const splitStr = pokemon.name.slice(1);
  const name = firstLetter + splitStr;

  return (
    <>
      <SegmentData>
        <Image src={pokemon.sprites.front_default} alt="front" />
        <DataContainer>
          <Label>{name}</Label>
          <TypesContainer>
            {pokemon.types.map((type) => {
              return <TypesTag type={type} key={type.type.name} />;
            })}
          </TypesContainer>
          <PokemonStats stats={pokemon.stats} />
        </DataContainer>
      </SegmentData>
      <MovesData>
        <Label>Moves</Label>
        {pokemonMoves.map((move) => {
          return (
            <Text key={move.move.name}>{move.move.name.replace("-", " ")}</Text>
          );
        })}
      </MovesData>
      <Button>Catch</Button>
    </>
  );
};

const DataContainer = styled.div({
  marginLeft: 20,
});

const TypesContainer = styled.div({
  display: "flex",
  margin: "12px 0px",
});

const Image = styled.img({
  width: 150,
});

const Label = styled.label({
  fontSize: 20,
  fontWeight: "bold",
});

const Text = styled.p({
  margin: "4px 0px",
});

const SegmentData = styled.div({
  display: "flex",
});

const MovesData = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: 16,
});

const Button = styled.button({
  height: "50px",
  borderRadius: "7px",
  backgroundColor: "#FDFD96",
  border: "none",
  cursor: "pointer",
  fontFamily: "Poppins",
  fontSize: 16,
  fontWeight: "bold",
});

export default PokemonData;
