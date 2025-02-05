import assignCards from "./assignCards";

/*
Esta función se encarga de abrir la ventana modal de EnteringPlayers y además, 
carga el estado de asignedCards llamando a assignCards
*/

const openEnterPlayers = (modifyCards) => {
  const enterPlayers = document.getElementById("enterPlayers");
  enterPlayers.showModal();

  const updatedCards = assignCards();
  
  modifyCards(updatedCards);
};

export default openEnterPlayers;
