import React from "react";
import { styled } from "@stitches/react";
import Row from "./Row";

const StyledGrid = styled("div", {
  width: "350px",
  height: "420px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Grid = () => {
  return (
    <StyledGrid>
      <Row isActive/>
      <Row isActive={false}/>
      <Row isActive={false}/>
      <Row isActive={false}/>
      <Row isActive={false}/>
      <Row isActive={false}/>
    </StyledGrid>
  );
};

export default Grid;
