import { verifyWin, shiftChange } from "../utils";

const showedCards = [];
const showedCardsIds = [];
const showedCardsContainers = [];

const drawLetter = (
  id,
  card,
  players,
  activePlayer,
  modifyPlayers,
  modifyActivePlayer,
  modifyWinner
) => {
  const showedCardContainer = document.getElementById(id);

  if (
    showedCards.length === 2 ||
    showedCardContainer.classList.contains("visible")
  )
    return;

  const index = players.findIndex((player) => player.name === activePlayer);

  showedCardContainer.classList.add("visible");

  showedCards.push(card);
  showedCardsIds.push(id);
  showedCardsContainers.push(showedCardContainer);

  if (showedCards.length === 2) {
    const firstCard = showedCardsContainers[0];
    const secondCard = showedCardsContainers[1];

    if (showedCards[0] !== showedCards[1]) {
      setTimeout(() => {
        firstCard.classList.remove("visible");
        secondCard.classList.remove("visible");
      }, 500);

      const updatedActivePlayer = players[(index + 1) % players.length].name;

      shiftChange(updatedActivePlayer);

      modifyActivePlayer(updatedActivePlayer);
    } else {
      firstCard.parentElement.classList.add(players[index].bg);
      secondCard.parentElement.classList.add(players[index].bg);

      const updatedPlayers = players.map((player) => {
        if (player.name === activePlayer) {
          return { ...player, points: player.points + 1 };
        }
        return player;
      });

      const winner = verifyWin(updatedPlayers);
      modifyPlayers(updatedPlayers);

      if (winner) {
        if (Array.isArray(winner)) {
          modifyWinner("There Is A Tie");
        } else {
          updatedPlayers.map((player) => {
            if (player === winner) {
              modifyWinner(`The Winner Is ${winner.name}`);
              return;
            }
            return player;
          });
        }
      }
    }

    showedCards.length = 0;
    showedCardsIds.length = 0;
    showedCardsContainers.length = 0;
  }
};

export default drawLetter;
