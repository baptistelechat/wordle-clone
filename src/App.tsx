import React, { useEffect, useReducer, useState } from "react";
import { styled } from "@stitches/react";
import Grid from "./components/Grid";
import { WordleContext } from "./context/wordleContext";
import { bounce } from "./style/animation";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const wordReducer = (prevWord: string, key: string) => {
  if (/^[0-9]$/i.test(key)) return prevWord;

  switch (key) {
    case "Backspace":
      return prevWord.slice(0, -1);
    default:
      if (prevWord.length < 5) {
        return `${prevWord}${key}`;
      }
  }
  return prevWord;
};

function App() {
  const [word, setWord] = useReducer(wordReducer, "");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setWord(e.key);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
