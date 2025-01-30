const verifyWin = (players) => {
  const allCards = document.querySelectorAll(".card");
  const allVisibleCards = document.querySelectorAll(".visible");

  if (allCards.length === allVisibleCards.length) {
    const endScreen = document.getElementById("endScreen");

    const winners = players.filter((player) => {
      return player.points === Math.max(...players.map((p) => p.points));
    });

    endScreen.showModal();

    return winners;
  }
};

export default verifyWin;