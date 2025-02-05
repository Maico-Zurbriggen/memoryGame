/*Esta función cambia el icono que indica el jugador activo según se modifica el jugador activo*/

const shiftChange = (modifyActivePlayer, indexActivePlayer, players, ActivePlayer) => {
  const playersContainer = document.querySelectorAll(".player-container");
  const playersIcon = document.querySelectorAll(".player-icon");

  const updatedActivePlayer = players ? players[(indexActivePlayer + 1) % players.length].name : ActivePlayer;

  playersContainer.forEach((player, i) => {
    if (player.id === updatedActivePlayer) {
      playersIcon[i].classList.remove("invisibility");
    } else {
      playersIcon[i].classList.add("invisibility");
    }
  });

  modifyActivePlayer(updatedActivePlayer);
};

export default shiftChange;