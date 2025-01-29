import { useState, useEffect } from "react";
import "./App.css";
import { Panel, Button, EnteringPlayers, EndScreen } from "./components";
import { cards, constantPlayers, constantsDrawLetter } from "./constants";
import { selectPlayers, play, drawLetter, verifyWin } from "./utils";

const { showedCards, showedCardsIds } = constantsDrawLetter;
let winnerName = "";

function App() {
  const [asignedCards, setAsignedCards] = useState([]);
  const [activePlayer, setActivePlayer] = useState("");
  const [players, setPlayers] = useState(constantPlayers);

  useEffect(() => {
    const players = document.querySelectorAll(".player-container");
    const playersIcon = document.querySelectorAll(".player-icon");
    players.forEach((player, i) => {
      if (player.id === activePlayer) {
        playersIcon[i].classList.remove("invisibility");
      } else {
        playersIcon[i].classList.add("invisibility");
      }
    });
  }, [activePlayer]);

  const auxiliarPlay = (e) => {
    e.preventDefault();

    const { updatedPlayers, playersNames, arrayCards } = play(players);

    setPlayers(updatedPlayers);
    setActivePlayer(playersNames[0]);
    setAsignedCards(arrayCards);
  }

  const auxiliarDrawLetter = (_, id, card) => {
    const showCard = document.getElementById(id);

    if (showedCards.length === 2 || showCard.classList.contains("visible"))
      return;

    const {changePlayers, changeActivePlayer} = drawLetter(players, activePlayer, showedCards, showedCardsIds, showCard, id, card);

    setPlayers(changePlayers);
    setActivePlayer(changeActivePlayer);

    const winner = verifyWin(players);
    if (winner) {
      winnerName = winner.name;
    }
  }

  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <Panel
          cards={cards}
          asignedCards={asignedCards}
          players={players}
          onClick={auxiliarDrawLetter}
        />
        <Button 
          text="play" 
          onClick={selectPlayers} 
          id="buttonPlay" 
        />
      </main>

      <dialog id="enterPlayers">
        <EnteringPlayers onSubmit={auxiliarPlay} />
      </dialog>

      <dialog id="endScreen">
        <EndScreen players={players} winnerName={winnerName} />
      </dialog>
    </>
  );
}

export default App;