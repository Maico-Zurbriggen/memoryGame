import assignCards from "./assignCards";

const play = (e, players, modifyPlayers, modifyActivePlayer, modifyCards) => {
    e.preventDefault();

    const playersNames = [];

    const panel = document.getElementById("panel");
    const buttonPlay = document.getElementById("buttonPlay");
    const enterPlayers = document.getElementById("enterPlayers");

    playersNames.push(document.getElementById("player1").value);
    playersNames.push(document.getElementById("player2").value);
    playersNames.push(document.getElementById("player3").value);
    playersNames.push(document.getElementById("player4").value);

    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    document.getElementById("player3").value = "";
    document.getElementById("player4").value = "";

    const updatedPlayers = players.map((player, i) => {
      return { ...player, name: playersNames[i] };
    })
    const updatedActivePlayer = playersNames[0];
    const updatedCards = assignCards();

    panel.classList.remove("hidden");
    panel.classList.add("panel");
    buttonPlay.classList.add("hidden");

    modifyPlayers(updatedPlayers);
    modifyActivePlayer(updatedActivePlayer);
    modifyCards(updatedCards);

    enterPlayers.close();
};

export default play;