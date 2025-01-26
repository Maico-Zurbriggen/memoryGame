const Player = ({ name, bg }) => {
    return (
        <div className="player">
            <span className={`${bg}`}></span>
            <p>{name}</p>
        </div>
    )
}

export default Player;