const drawLetter = (players, activePlayer, showedCards, showedCardsIds, showCard, id, card) => {
  const index = players.findIndex((player) => player.name === activePlayer);
  let changePlayers = players;
  let changeActivePlayer = activePlayer;

  showCard.classList.add("visible");

  showedCards.push(card);
  showedCardsIds.push(id);

  if (showedCards.length === 2) {
    const firstCard = document.getElementById(showedCardsIds[0]);
    const secondCard = document.getElementById(showedCardsIds[1]);

    if (showedCards[0] !== showedCards[1]) {
      setTimeout(() => {
        firstCard.classList.remove("visible");
        secondCard.classList.remove("visible");
      }, 500);

      changeActivePlayer = players[(index + 1) % players.length].name;
    } else {
      firstCard.parentElement.classList.add(players[index].bg);
      secondCard.parentElement.classList.add(players[index].bg);

      changePlayers = players.map((player) => {
        if (player.name === activePlayer) {
          return { ...player, points: player.points + 1 };
        }
        return player;
      });
    }
    
    showedCards.length = 0;
    showedCardsIds.length = 0;
  }
  
  return {changePlayers, changeActivePlayer};
};

export default drawLetter;
