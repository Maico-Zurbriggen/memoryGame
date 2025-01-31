import { assignCards, shiftChange, resetPoints } from "../utils";

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

  const updatedCards = assignCards();

  shiftChange(updatedActivePlayer);

  if (players) {
    resetPoints(players, modifyPlayers);
    modifyActivePlayer(updatedActivePlayer);
  }

  modifyCards(updatedCards);

  endScreen.close();
};

export default restartPanel;
