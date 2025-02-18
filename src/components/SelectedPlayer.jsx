import { useState, useEffect } from "react";

export default function selectedPlayer({
  selectedPlayerId,
  setSelectedPlayerId,
}) {
  const [player, setPlayer] = useState(null);
  const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedPlayerId}`;

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setPlayer(result?.data?.players || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, [selectedPlayerId]);

  console.log("Player:", player);

  return (
    <div>
      <h2>Selected Player ID: {selectedPlayerId}</h2>

      {/* Player Details */}

      <button onClick={() => setSelectedPlayerId(null)}>
        Back to Player List
      </button>
    </div>
  );
}
