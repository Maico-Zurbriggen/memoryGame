const assignPlayers = (players, modifyErrors) => {
  const minimunCharacters = 8;
  const minimunPlayers = 2;
  const errorOfCharacters = "Maximum eight characters";
  const errorOfPlayers = "Minimum two players";
  const errorOfRepetition = "Don't repeat names";

  const playersNames = [];
  let updatedErrors = [];

  playersNames.push(document.getElementById("player1").value.toUpperCase());
  playersNames.push(document.getElementById("player2").value.toUpperCase());
  playersNames.push(document.getElementById("player3").value.toUpperCase());
  playersNames.push(document.getElementById("player4").value.toUpperCase());

  if (playersNames.filter((name) => name !== "").length < minimunPlayers) {
    updatedErrors = [...updatedErrors, errorOfPlayers];
  }

  if (
    playersNames.filter((name) => {
      if (name !== "" && name.length > minimunCharacters) {
        return name;
      }
    }).length
  ) {
    updatedErrors = [...updatedErrors, errorOfCharacters];
  }

  if (playersNames.length !== new Set(playersNames).size) {
    updatedErrors = [...updatedErrors, errorOfRepetition];
  }

  if (updatedErrors.length) modifyErrors(updatedErrors);

  if (updatedErrors.length) { 
    setTimeout(() => {
      modifyErrors([]);
    }, 2000);
    return {updatedErrors};
  }
  
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  document.getElementById("player3").value = "";
  document.getElementById("player4").value = "";

  const updatedPlayers = players.map((player, i) => {
    return { ...player, name: playersNames[i] };
  }).filter((player, i) => {
    if (playersNames[i] !== "") {
      return player;
    }
  });

  return {updatedPlayers, updatedErrors};
};

export default assignPlayers;
