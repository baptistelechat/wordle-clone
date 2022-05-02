import React, { useState } from "react";
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

const StyledInput = styled("input", {
  width: "150px",
  height: "30px",
  border: "2px solid #d3d3d3",
  borderRadius: "5px",
  padding: "5px 10px",
  margin: "10px 0",
  fontSize: "20px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#000",
  outline: "none",
  backgroundColor: "#fff",
  textAlign: "center",
  transition: "0.25s border",
  "&:focus": {
    border: "2px solid #878a8c",
  },
});

function App() {
  const [word, setWord] = useState("");

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
        <StyledInput
          type="text"
          maxLength={5}
          onChange={(e) => setWord(e.currentTarget.value)}
        />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
