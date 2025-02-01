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

  const playersNamesFilters = playersNames.filter(name => name !== "")
  console.log(playersNamesFilters);

  if (playersNamesFilters.length < minimunPlayers) {
    updatedErrors = [...updatedErrors, errorOfPlayers];
  }

  if (
    playersNamesFilters.filter(name => {
      if (name.length > minimunCharacters) {
        return name;
      }
    }).length
  ) {
    updatedErrors = [...updatedErrors, errorOfCharacters];
  }

  if (playersNamesFilters.length !== new Set(playersNamesFilters).size) {
    updatedErrors = [...updatedErrors, errorOfRepetition];
  }

  if (updatedErrors.length) {
    modifyErrors(updatedErrors);

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
  }).filter(player => {
    if (player.name !== "") {
      return player;
    }
  })

  return {updatedPlayers, updatedErrors};
};

export default assignPlayers;
