import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserPokemonCard = ({ pokemon, releasePokemon }) => {
  const firstLetter = pokemon.name.charAt(0).toUpperCase();
  const splitStr = pokemon.name.slice(1);
  const name = firstLetter + splitStr;
  console.log(pokemon);
  return (
    <Container>
      <Image src={pokemon.image} />
      <NameContainer>
        <Name>{name}</Name>
        <Nickname>nickname: {pokemon.nickname}</Nickname>
      </NameContainer>
      <FontAwesomeIcon
        onClick={() => releasePokemon(pokemon.nickname, pokemon.name)}
        icon={faTimes}
      />
    </Container>
  );
};

const Container = styled.div({
  width: "100%",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
  boxShadow: "2px 2px 8px rgba(111, 111, 111, 0.2)",
  padding: "12px",
});

const NameContainer = styled.div({
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
});

const Image = styled.img({
  width: 60,
  height: 60,
  marginRight: 14,
});

const Name = styled.label({
  fontWeight: "bold",
});

const Nickname = styled.label({
  marginRight: "auto",
  fontSize: 12,
  color: "#636c72",
});

export default UserPokemonCard;
