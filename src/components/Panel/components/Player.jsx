const Player = ({ name, bg, color, id, points }) => {
  return (
    <>
      <div className="player-container" id={id}>
        <li>
          <i className={`player-icon ${color} invisibility`}>&#x25BC;</i>
        </li>
        <li className={`player-name ${bg}`}>
          <p>{name}</p>
          <p className="player-points">{points}</p>
        </li>
      </div>
    </>
  );
};

export default Player;
