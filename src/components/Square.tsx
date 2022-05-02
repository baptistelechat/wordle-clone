import React from "react";
import { styled } from "@stitches/react";
import Letter from "./Letter";

const StyledSquare = styled("div", {
  flex: 1,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "2px solid #d3d3d3",
});

function Square() {
  return (
    <StyledSquare>
      <Letter />
    </StyledSquare>
  );
}

export default Square;
