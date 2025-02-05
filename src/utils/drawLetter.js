import { verifyWin, shiftChange } from "../utils";

/*
Esta función se encarga de mostrar las cartas al presionarlas y evalúa cuando hay coincidencia y cuando no,
además no permite que se toquen varias cartas juntas y no permite que se presionen cartas ya descubiertas.
Por ultimo verifica si hay un ganador o no al encontrar una coincidencia
*/

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

      shiftChange(modifyActivePlayer, indexActivePlayer, players);

    } else {
      firstCard.parentElement.classList.add(players[indexActivePlayer].bg);
      secondCard.parentElement.classList.add(players[indexActivePlayer].bg);

      const updatedPlayers = players.map((player) => {
        if (player.name === activePlayer) {
          return { ...player, points: player.points + 1 };
        }
        return player;
      });

      verifyWin(updatedPlayers, modifyWinner);
      modifyPlayers(updatedPlayers);
    }

    setTimeout(() => {
      showedCards.length = 0;
      showedCardsIds.length = 0;
      showedCardsContainers.length = 0;
    }, 500);
  }
};

export default drawLetter;
