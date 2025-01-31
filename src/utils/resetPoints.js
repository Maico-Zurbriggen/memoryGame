const resetPoints = (players, modifyPlayers) => {
  const updatedPlayers = players.map((player) => {
    return { ...player, points: 0 };
  });

  modifyPlayers(updatedPlayers);
};

export default resetPoints;
