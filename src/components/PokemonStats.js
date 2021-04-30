import React from "react";
import styled from "@emotion/styled";

const PokemonStats = ({ stats }) => {
  return (
    <Container>
      <Item>
        <Label>HP</Label>
        <Text>{stats[0].base_stat}</Text>
      </Item>
      <Item>
        <Label>Attack</Label>
        <Text>{stats[1].base_stat}</Text>
      </Item>
      <Item>
        <Label>Defense</Label>
        <Text>{stats[2].base_stat}</Text>
      </Item>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
});

const Item = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "20px",
});

const Label = styled.label({
  fontSize: 16,
  fontWeight: "bold",
});

const Text = styled.p({
  fontSize: 16,
  margin: 0,
  color: "black",
});

export default PokemonStats;
