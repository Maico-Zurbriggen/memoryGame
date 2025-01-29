const verifyWin = (players) => {
  const allCards = document.querySelectorAll(".card");
  const allVisibleCards = document.querySelectorAll(".visible");

  if (allCards.length === allVisibleCards.length) {
    const endScreen = document.getElementById("endScreen");

    const winner = players.reduce((acc, player) => {
      if (player.points > acc.points) {
        return player;
      }
      return acc;
    });

    endScreen.showModal();

    return winner;
    /*
    allVisibleCards.forEach((card) => {
      card.classList.remove("visible");
      card.classList.add("transparent");

      card.parentElement.classList.forEach((c) => {
        if (c.includes("bg")) {
          card.parentElement.classList.remove(c);
        }
      });
    });

    const panel = document.getElementById("panel");
    const buttonPlay = document.getElementById("buttonPlay");

    panel.classList.add("hidden");
    panel.classList.remove("panel");

    buttonPlay.classList.remove("hidden");
    */
  }
};

export default verifyWin;
