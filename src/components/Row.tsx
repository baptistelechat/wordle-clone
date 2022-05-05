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
  const { word, secretWord } = useContext(WordleContext);

  const getLetter = (index: number) => {
    if (props.isActive) {
      return word[index];
    } else {
      return "";
    }
  };

  return (
    <StyledRow>
      {Array.from(Array(secretWord.length).keys()).map((letterPosition) => (
        <Square letter={getLetter(letterPosition)} />
      ))}
    </StyledRow>
  );
};

export default Row;
