/*
Esta función se encarga de reiniciar los puntajes de los jugadores
*/

const resetPoints = (players, modifyPlayers) => {
  const updatedPlayers = players.map((player) => {
    return { ...player, points: 0 };
  });

  modifyPlayers(updatedPlayers);
};

export default resetPoints;
