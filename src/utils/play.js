import assignPlayers from "./assignPlayers";

/*
Esta función actualiza el estado players con los nombres de los jugadores y actualiza el estado activePlayer
con el primer nombre de los jugadores o puede devolver un error si se detecto alguno en la validación
*/

const play = (e, players, modifyPlayers, modifyActivePlayer, modifyErrors) => {
  e.preventDefault();

  const indexFirstPlayer = 0;

  const panel = document.getElementById("panel");
  const buttonPlay = document.getElementById("buttonPlay");
  const enterPlayers = document.getElementById("enterPlayers");

  const {updatedErrors, updatedPlayers} = assignPlayers(players, modifyErrors)

  if (updatedErrors.length) return;

  const updatedActivePlayer = updatedPlayers[indexFirstPlayer].name;

  panel.classList.remove("hidden");
  panel.classList.add("panel");
  buttonPlay.classList.add("hidden");

  modifyPlayers(updatedPlayers);
  modifyActivePlayer(updatedActivePlayer);

  enterPlayers.close();
};

export default play;
