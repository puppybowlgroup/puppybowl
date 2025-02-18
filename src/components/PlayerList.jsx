import React from "react";
import { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";

const dummyPlayers = [
  {
    id: 1,
    name: "puppy-name",
    breed: "dog-breed",
    status: "field/bench",
    imageUrl: "exampleUrl",
    createdAt: "??",
    updatedAt: "??",
    teamId: "numbers",
    cohortId: 2780,
  },
  {
    id: 2,
    name: "puppy-name2",
    breed: "dog-breed2",
    status: "field/bench",
    imageUrl: "exampleUrl",
    createdAt: "??",
    updatedAt: "??",
    teamId: "numbers",
    cohortId: 2780,
  },
  {
    id: 3,
    name: "puppy-name3",
    breed: "dog-breed3",
    status: "field/bench",
    imageUrl: "exampleUrl",
    createdAt: "??",
    updatedAt: "??",
    teamId: "numbers",
    cohortId: 2780,
  },
];

export default function PlayerList({ setSelectedPlayerId }) {
  const [player, setPlayer] = useState(dummyPlayers);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-AM/players/"
        );
        const result = await response.json();
        setPlayer(result?.data?.players || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  console.log("player:", player);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">player List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Breed</td>
            <td>Status</td>
          </tr>
          {player.map((player) => {
            return (
              <PlayerRow
                key={player.id}
                player={player}
                setSelectedPlayerId={setSelectedPlayerId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
