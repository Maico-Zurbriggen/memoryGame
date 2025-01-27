const Player = ({ name, bg }) => {
    return (
        <li className={`player ${bg}`}>
            {name}
        </li>
    )
}

export default Player;