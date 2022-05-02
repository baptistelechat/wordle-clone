import React from "react";
import { styled } from "@stitches/react";

const StyledLetter = styled("div", {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "32px",
});

function Letter() {
  return <StyledLetter>A</StyledLetter>;
}

export default Letter;
