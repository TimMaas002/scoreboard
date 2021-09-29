import React from "react";
import "./Player.scss";

type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

export default function Player({ name, score, incrementScore }: Props) {
  return (
    <li>
      <p>
        {name} (score: {score}) <button onClick={incrementScore}>+</button>
      </p>
    </li>
  );
}
