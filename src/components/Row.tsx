import React from "react";
import { styled } from "@stitches/react";
import Square from "./Square";

const StyledRow = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const Row = () => {
  return (
    <StyledRow>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </StyledRow>
  );
};

export default Row;
