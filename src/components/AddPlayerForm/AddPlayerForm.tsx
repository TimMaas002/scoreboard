import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type Props = {
  addPlayer: (name: string) => void;
};

export default function AddPlayerForm({ addPlayer }: Props) {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <Typography>New player: </Typography>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />{" "}
      <Button
        variant="outlined"
        onClick={() => {
          addPlayer(name);
          setName("");
        }}
      >
        Add
      </Button>
    </div>
  );
}
