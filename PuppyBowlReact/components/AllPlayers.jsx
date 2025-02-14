import React from 'react';
import {useEffect} from 'react';
import PlayerRow from './PlayerRow.jsx'

export default function AllPlayers({players, setPlayers}) {
    // Fetching
    useEffect(() => {
        async function fetchPlayers() {
            try {
                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-AM/players'
                );
                const result = await response.json();
                setPlayers(result)
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlayers()
    }, []);
 console.log(players.data)
    return (
        // Table rows display
        <table>
            <thead>
                <tr>
                    <th colSpan='3'>Player List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Breed</td>
                    <td>Status</td>
                </tr>
                {/* maps players array into the rows */}
                    {players.data.map((player) => {
                        return <PlayerRow key={player.id} player={player} />
                    })

                    }
            </tbody>
        </table>
    )
}