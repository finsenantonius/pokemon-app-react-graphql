import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
  boxShadow: "2px 2px 8px rgba(111, 111, 111, 0.2)",
  padding: "12px",
});

const Image = styled.img({
  width: 60,
  height: 60,
  marginRight: 14,
});

const Name = styled.label({
  fontSize: 16,
  fontFamily: "Poppins",
  fontWeight: "bold",
});

const PokemonCard = ({ pokemon }) => {
  return (
    <Container>
      <Image src={pokemon.image} />
      <Name>{pokemon.name}</Name>
    </Container>
  );
};

export default PokemonCard;
