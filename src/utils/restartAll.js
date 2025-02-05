import restartPanel from "./restartPanel";

/*
Esta función se encarga de dejar la aplicación como esta al abrirla para volver a cargar
los nombres de los jugadores, utiliza restartPanel que es una función que realiza un reinicio parcial
*/

const restartAll = (
  updatedActivePlayer,
  modifyCards,
  modifyActivePlayer,
  resetPlayers
) => {
  const panel = document.getElementById("panel");
  const buttonPlay = document.getElementById("buttonPlay");

  restartPanel(updatedActivePlayer, modifyCards, modifyActivePlayer);
  resetPlayers();

  panel.classList.remove("panel");
  panel.classList.add("hidden");
  buttonPlay.classList.remove("hidden");
};

export default restartAll;
