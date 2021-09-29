import React, { useState } from "react";
import "./Scoreboard.scss";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";

type PlayerObj = {
  id: number;
  name: string;
  score: number;
};

function compareByScore(playerA: PlayerObj, playerB: PlayerObj) {
  return playerB.score - playerA.score;
}

function compareByName(playerA: PlayerObj, playerB: PlayerObj) {
  return playerA.name.localeCompare(playerB.name);
}

export default function Scoreboard() {
  const [players, setPlayers] = useState<PlayerObj[]>([
    { id: 1, name: "Violeta", score: Math.floor(Math.random() * 101) },
    { id: 2, name: "Eszter", score: Math.floor(Math.random() * 101) },
    { id: 3, name: "Jeroen v2", score: Math.floor(Math.random() * 101) },
    { id: 4, name: "Lisa", score: Math.floor(Math.random() * 101) },
  ]);

  const resetScore = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          score: 0,
        };
      })
    );
  };

  const incrementScore = (id: number) => {
    const updatedPlayersArray = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    setPlayers(updatedPlayersArray);
  };

  const addPlayer = (name: string) => {
    const newPlayerId = Math.max(...players.map((p) => p.id)) + 1;
    setPlayers([...players, { id: newPlayerId, name, score: 0 }]);
  };

  const [sortBy, setSortBy] = useState("score"); // either "score" or "name"

  const playersSorted =
    // first "copy" the array
    [...players]
      // then sort it with the `compareByScore` callback function
      .sort(sortBy === "name" ? compareByName : compareByScore);

  return (
    <div>
      <Typography variant="h2">Scoreboard</Typography>
      <Box>
        <FormControl>
          <InputLabel id="sort-label">Sort order:</InputLabel>
          <Select
            labelId="sort-label"
            label="Sort order"
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
            value={sortBy}
          >
            <MenuItem value="score">Sort by score</MenuItem>
            <MenuItem value="name">Sort by name</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="outlined" onClick={resetScore}>
        Reset
      </Button>
      <Typography>Player's Scores:</Typography>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {playersSorted.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              incrementScore={() => {
                incrementScore(player.id);
              }}
            />
          );
        })}
      </Stack>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
