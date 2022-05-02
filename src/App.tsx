import React from "react";
import { styled } from "@stitches/react";
import Grid from "./components/Grid";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <Container>
      <Grid />
    </Container>
  );
}

export default App;
