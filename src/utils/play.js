import assignCards from "./assignCards";

const play = (players) => {
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

    panel.classList.remove("hidden");
    panel.classList.add("panel");

    let arrayCards = assignCards();

    buttonPlay.classList.add("hidden");

    enterPlayers.close();

    return { updatedPlayers, playersNames, arrayCards };
};

export default play;