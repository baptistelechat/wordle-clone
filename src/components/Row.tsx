import React, { useContext } from "react";
import { styled } from "@stitches/react";
import Square from "./Square";
import { WordleContext } from "../context/wordleContext";

interface IRow {
  isActive: boolean;
}

const StyledRow = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const Row = (props: IRow) => {
  const { word } = useContext(WordleContext);

  const getLetter = (index: number) => {
    if (props.isActive) {
      return word[index];
    } else {
      return "";
    }
  };

  return (
    <StyledRow>
      {Array.from(Array(5).keys()).map((_, index) => (
        <Square key={index} letter={getLetter(index)} />
      ))}
    </StyledRow>
  );
};

export default Row;
