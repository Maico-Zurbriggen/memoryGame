/*
Este es el componente encargado de la muestra de los jugadores, con el indicador de turno,
el nombre del jugador y su puntaje
*/

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
        <li className={`player-name-container flex-center w-100 resalt-text ${bg}`}>
          <p className="player-name">{name}</p>
          <p className="player-points">{points}</p>
        </li>
      </div>
    </>
  );
};

export default Player;
