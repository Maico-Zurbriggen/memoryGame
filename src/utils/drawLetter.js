import { verifyWin, shiftChange } from "../utils";

const showedCards = [];
const showedCardsIds = [];
const showedCardsContainers = [];

const indexFirstCard = 0;
const indexSecondCard = 1;
const maximumCardsShowed = 2;

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
    showedCards.length === maximumCardsShowed ||
    showedCardContainer.classList.contains("visible")
  )
    return;

  const indexActivePlayer = players.findIndex(
    (player) => player.name === activePlayer
  );

  showedCardContainer.classList.add("visible");

  showedCards.push(card);
  showedCardsIds.push(id);
  showedCardsContainers.push(showedCardContainer);

  if (showedCards.length === maximumCardsShowed) {
    const firstCard = showedCardsContainers[indexFirstCard];
    const secondCard = showedCardsContainers[indexSecondCard];

    if (showedCards[indexFirstCard] !== showedCards[indexSecondCard]) {
      setTimeout(() => {
        firstCard.classList.remove("visible");
        secondCard.classList.remove("visible");
      }, 500);

      const updatedActivePlayer = players[(indexActivePlayer + 1) % players.length].name;

      shiftChange(updatedActivePlayer);

      modifyActivePlayer(updatedActivePlayer);
    } else {
      firstCard.parentElement.classList.add(players[indexActivePlayer].bg);
      secondCard.parentElement.classList.add(players[indexActivePlayer].bg);

      const updatedPlayers = players.map((player) => {
        if (player.name === activePlayer) {
          return { ...player, points: player.points + 1 };
        }
        return player;
      });

      const winner = verifyWin(updatedPlayers);
      modifyPlayers(updatedPlayers);

      if (winner.length) {
        if (winner.length > 1) {
          modifyWinner("There Is A Tie");
        } else {
          modifyWinner(`The Winner Is ${winner[0].name}`);
        }
      }
    }

    setTimeout(() => {
      showedCards.length = 0;
      showedCardsIds.length = 0;
      showedCardsContainers.length = 0;
    }, 500);
  }
};

export default drawLetter;
