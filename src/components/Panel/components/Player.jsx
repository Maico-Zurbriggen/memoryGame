const Player = ({ name, bg, color, id, points }) => {
  return (
    <>
      <div className="player-container flex-center w-100" id={id}>
        <li className="resalt-text">
          <p
            className={`player-icon ${color} ${
              bg.includes("blue") ? "" : "invisibility"
            }`}
          >
            &#x25BC;
          </p>
        </li>
        <li className={`player-name flex-center w-100 resalt-text ${bg}`}>
          <p>{name}</p>
          <p className="player-points">{points}</p>
        </li>
      </div>
    </>
  );
};

export default Player;
