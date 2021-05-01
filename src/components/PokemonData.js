import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import TypesTag from "../components/TypesTag";
import PokemonStats from "../components/PokemonStats";
import PokemonInput from "../components/PokemonInput";
import { PokemonContext } from "../context/PokemonContext";

const PokemonData = ({ pokemon, userPokemon, setUserPokemon }) => {
  const { countPokemonOwned } = useContext(PokemonContext);
  const [open, setOpen] = useState(null);
  const [alert, setAlert] = useState(false);
  const [nickname, setNickname] = useState();

  const pokemonMoves = pokemon.moves.slice(0, 5);
  const firstLetter = pokemon.name.charAt(0).toUpperCase();
  const splitStr = pokemon.name.slice(1);
  const name = firstLetter + splitStr;

  const catchPokemon = () => {
    let chance = Math.random() < 0.5;
    if (chance === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const submitPokemon = () => {
    if (userPokemon.some((pokemon) => pokemon.nickname === nickname)) {
      setAlert(true);
    } else {
      const data = {
        nickname: nickname,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      };
      setAlert(false);
      setOpen(null);
      setUserPokemon((userPokemon) => [...userPokemon, data]);
      countPokemonOwned(pokemon.name, "add");
    }
  };

  localStorage.setItem("_user_pokemon", JSON.stringify(userPokemon));
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
      {!open ? <Button onClick={catchPokemon}>Catch</Button> : null}
      {open ? (
        <PokemonInput
          setNickname={setNickname}
          submitPokemon={submitPokemon}
          alert={alert}
        />
      ) : open === false ? (
        <p>Failed to catch pokemon, please try again.</p>
      ) : null}
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
  marginBottom: 12,
});

export default PokemonData;
