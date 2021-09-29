import React from "react";
import "./Player.scss";

import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

export default function Player({ name, score, incrementScore }: Props) {
  return (
    <ListItem>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">(score: {score})</Typography>
      <Button variant="contained" onClick={incrementScore}>
        +
      </Button>
    </ListItem>
  );
}
