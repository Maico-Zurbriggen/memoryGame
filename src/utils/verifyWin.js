/*
Esta función verifica si todas las cartas fueron descubiertas y si lo fueron verifica quien ha sido el ganador
y actualiza el estado Winner
*/

const verifyWin = (players, modifyWinner) => {
  const allCards = document.querySelectorAll(".card");
  const allVisibleCards = document.querySelectorAll(".visible");
  let winners = [];

  if (allCards.length === allVisibleCards.length) {
    const endScreen = document.getElementById("endScreen");

    winners = players.filter((player) => {
      return player.points === Math.max(...players.map((p) => p.points));
    });

    endScreen.showModal();
  }

  if (winners.length) {
    if (winners.length > 1) {
      modifyWinner("There Is A Tie");
    } else {
      modifyWinner(`The Winner Is ${winners[0].name}`);
    }
  }
};

export default verifyWin;