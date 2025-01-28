const Player = ({ name, bg, color, id, points }) => {
  return (
    <>
      <div className="player-container" id={id}>
        <li>
          <i className={`player-icon ${color} invisibility`}>&#x25BC;</i>
        </li>
        <li className={`player-name ${bg}`}>{name}</li>
      </div>
      <li className="player-points">{points}</li>
    </>
  );
};

export default Player;
