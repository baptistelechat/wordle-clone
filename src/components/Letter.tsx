import React from "react";
import { styled } from "@stitches/react";

interface ILetter {
  letter: string;
}

const StyledLetter = styled("div", {
  fontFamily: "Arial",
  textTransform: "Uppercase",
  fontWeight: "bold",
  fontSize: "32px",
});

function Letter(props: ILetter) {
  return <StyledLetter>{props.letter}</StyledLetter>;
}

export default Letter;
