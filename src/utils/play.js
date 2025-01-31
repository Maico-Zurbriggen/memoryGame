import assignPlayers from "./assignPlayers";

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
