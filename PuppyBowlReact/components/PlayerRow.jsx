
export default function PlayerRow({ player }) {
    return (
        <tr onClick={() => {setPlayerId(player.id)}}>
            <td>{player.name}</td>
            <td>{player.breed}</td>
            <td>{player.status}</td>
        </tr>
    )
}