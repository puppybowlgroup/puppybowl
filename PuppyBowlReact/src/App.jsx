import { useState } from 'react'
import './App.css'
import AllPlayers from '/components/AllPlayers.jsx'

function App() {

  // dummy players to test
  const dummyPlayers = [
    { id: 1, name: 'puppy-name', breed:'dog-breed', status: 'field/bench', imageUrl: 'exampleUrl', createdAt: '??', updatedAt: '??', teamId: 'numbers', cohortId: 2780},
    { id: 2, name: 'puppy-name2', breed:'dog-breed2', status: 'field/bench', imageUrl: 'exampleUrl', createdAt: '??', updatedAt: '??', teamId: 'numbers', cohortId: 2780},
    { id: 3, name: 'puppy-name3', breed:'dog-breed3', status: 'field/bench', imageUrl: 'exampleUrl', createdAt: '??', updatedAt: '??', teamId: 'numbers', cohortId: 2780},
  ]

  const [players, setPlayers] = useState(dummyPlayers)

  return (
    <>
     <div>
        <div>
          <h1>Puppy Bowl in React!</h1>
        </div>
        <div>
          <AllPlayers players={players} setPlayers={setPlayers}/>
        </div>
     </div>
    </>
  );
}

export default App
