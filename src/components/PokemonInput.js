import React from "react";
import styled from "@emotion/styled";

const PokemonInput = ({ setNickname, submitPokemon, alert }) => {
  return (
    <Container>
      <Label>Success get new pokemon! Please input nickname: </Label>
      <Input type="text" onChange={(e) => setNickname(e.target.value)}></Input>
      {alert ? (
        <Alert>nickname already exists, please input another nickname.</Alert>
      ) : null}
      <Button onClick={submitPokemon}>Submit</Button>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});
const Label = styled.label({
  fontSize: 14,
  fontWeight: "bold",
  marginBottom: 4,
});
const Alert = styled.p({
  color: "red",
});
const Input = styled.input({
  height: "40",
  fontSize: 14,
  padding: 12,
  fontFamily: "Poppins",
  marginBottom: 12,
  border: "2px solid black",
  borderRadius: 4,
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

export default PokemonInput;
