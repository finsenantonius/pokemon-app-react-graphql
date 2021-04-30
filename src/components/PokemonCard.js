import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const firstLetter = pokemon.name.charAt(0).toUpperCase();
  const splitStr = pokemon.name.slice(1);
  const name = firstLetter + splitStr;

  return (
    <Link to={`/detail/${pokemon.name}`}>
      <Container>
        <Image src={pokemon.image} />
        <Name>{name}</Name>
        <FontAwesomeIcon icon={faChevronRight} />
      </Container>
    </Link>
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
  cursor: "pointer",
});

const Image = styled.img({
  width: 60,
  height: 60,
  marginRight: 14,
});

const Name = styled.label({
  fontWeight: "bold",
  marginRight: "auto",
});

export default PokemonCard;
