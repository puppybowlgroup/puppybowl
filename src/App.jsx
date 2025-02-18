import "./App.css";
import { useState } from "react";
import PlayerList from "./components/PlayerList";
import SelectedPlayer from "./components/SelectedPlayer";
// import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  return (
    <>
      {selectedPlayerId ? (
        <SelectedPlayer
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        />
      ) : (
        <PlayerList setSelectedPlayerId={setSelectedPlayerId} />
      )}

      {/* <NewPlayerForm /> */}
    </>
  );
}

export default App;
