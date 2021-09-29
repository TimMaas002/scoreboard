import React, { useState } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

export default function AddPlayerForm({ addPlayer }: Props) {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            addPlayer(name);
            setName("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
