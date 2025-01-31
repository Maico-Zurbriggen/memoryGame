import assignCards from "./assignCards";

const openEnterPlayers = (modifyCards) => {
  const enterPlayers = document.getElementById("enterPlayers");
  enterPlayers.showModal();

  const updatedCards = assignCards();
  
  modifyCards(updatedCards);
};

export default openEnterPlayers;
