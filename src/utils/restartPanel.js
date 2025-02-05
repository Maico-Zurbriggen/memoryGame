import { assignCards, shiftChange, resetPoints } from "../utils";

/*
Esta función se encarga de reiniciar el tablero reordenando las cartas, y reiniciar el puntaje de los jugadores
*/

const playersForReset = [];

const restartPanel = (
  updatedActivePlayer,
  modifyCards,
  modifyActivePlayer,
  players,
  modifyPlayers
) => {
  const allVisibleCards = document.querySelectorAll(".visible");
  const endScreen = document.getElementById("endScreen");

  allVisibleCards.forEach((card) => {
    card.classList.remove("visible");
    card.classList.add("transparent");

    card.parentElement.classList.forEach((c) => {
      if (c.includes("bg")) {
        card.parentElement.classList.remove(c);
      }
    });
  });

  shiftChange(modifyActivePlayer, 0, 0, updatedActivePlayer);

  if (players) {
    const updatedCards = assignCards();
    modifyCards(updatedCards);
    resetPoints(players, modifyPlayers);
  }

  endScreen.close();
};

export default restartPanel;
