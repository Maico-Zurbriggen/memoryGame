const shiftChange = (updatedActivePlayer) => {
  const playersContainer = document.querySelectorAll(".player-container");
  const playersIcon = document.querySelectorAll(".player-icon");

  playersContainer.forEach((player, i) => {
    if (player.id === updatedActivePlayer) {
      playersIcon[i].classList.remove("invisibility");
    } else {
      playersIcon[i].classList.add("invisibility");
    }
  });
};

export default shiftChange;