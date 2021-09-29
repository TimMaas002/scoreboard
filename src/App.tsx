import React from "react";
import "./App.scss";

import Scoreboard from "./components/Scoreboard/Scoreboard";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <Scoreboard />
    </Container>
  );
}

export default App;
