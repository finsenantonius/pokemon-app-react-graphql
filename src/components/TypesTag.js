import React from "react";
import styled from "@emotion/styled";

const TypesTag = ({ type }) => {
  return (
    <Container>
      <Text>{type.type.name}</Text>
    </Container>
  );
};

const Container = styled.div({
  width: 80,
  marginRight: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "whitesmoke",
  borderRadius: 10,
});

const Text = styled.p({
  fontSize: 14,
  margin: 0,
  color: "black",
});

export default TypesTag;
