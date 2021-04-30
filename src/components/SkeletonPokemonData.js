import React from "react";
import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";

const SkeletonPokemonData = () => {
  return (
    <>
      <SegmentData>
        <Skeleton width={150} height={150} />
        <DataContainer>
          <Skeleton width={150} height={25} />
          <TypesContainer>
            <Skeleton width={150} height={25} />
          </TypesContainer>
          <Skeleton width={150} height={50} />
        </DataContainer>
      </SegmentData>
      <MovesData>
        <Label>Moves</Label>
        <Skeleton width={"100%"} height={23} count={5} />
      </MovesData>
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

const SegmentData = styled.div({
  display: "flex",
});

const MovesData = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: 16,
});

const Label = styled.label({
  width: "100%",
  fontSize: 20,
  fontWeight: "bold",
});

export default SkeletonPokemonData;
