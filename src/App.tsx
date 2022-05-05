import React, { useEffect, useReducer } from "react";
import { styled } from "@stitches/react";
import Grid from "./components/Grid";
import { initialState, WordleContext } from "./context/wordleContext";
import { wordReducer } from "./handler/wordReducer";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});



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
    <WordleContext.Provider value={{ ...initialState, word }}>
      <Container>
        <p>🔑 Secret word : {initialState.secretWord}</p>
        <Grid />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
