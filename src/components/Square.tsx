import React from "react";
import { styled } from "@stitches/react";
import Letter from "./Letter";
import { bounce } from "../style/animation";

interface ISquare {
  letter: string;
}

const StyledSquare = styled("div", {
  flex: 1,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "2px solid #d3d3d3",
  transition: "0.25s outline",
  variants: {
    isActive: {
      true: {
        outline: "2px solid #878a8c",
        animation: `${bounce} 200ms ease`,
      },
    },
  },
});

const Square = (props: ISquare) => {
  return (
    <StyledSquare isActive={!!props.letter}>
      <Letter letter={props.letter} />
    </StyledSquare>
  );
};

export default Square;
