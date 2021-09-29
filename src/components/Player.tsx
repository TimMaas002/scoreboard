import React from "react";

type Props = {
  name: string;
};

export default function Player({ name }: Props) {
  return (
    <li className="Player">
      <p>{name}</p>
    </li>
  );
}
