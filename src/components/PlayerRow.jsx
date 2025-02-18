import React from "react";

export default function playerRow({ setSelectedPlayerId, player }) {
  return (
    <tr
      onClick={() => setSelectedPlayerId(player.id)}
      style={{ cursor: "pointer" }}
    >
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.status}</td>
    </tr>
  );
}
