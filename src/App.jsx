import { useState, useEffect } from "react";
import "./App.css";
import { Panel, Button, EnteringPlayers, EndScreen } from "./components";
import { cards, constantPlayers } from "./constants";
import {
  selectPlayers,
  play,
  drawLetter,
  restartPanel,
  restartAll,
} from "./utils";

function App() {
  const [asignedCards, setAsignedCards] = useState([]);
  const [activePlayer, setActivePlayer] = useState("");
  const [players, setPlayers] = useState(constantPlayers);
  const [winner, setWinner] = useState("");

  const resetPlayers = () => {
    setPlayers(constantPlayers);
    setActivePlayer("");
  };

  const modifyPlayers = (updatedPlayers) => {
    setPlayers(updatedPlayers);
  };

  const modifyActivePlayer = (updatedActivePlayer) => {
    setActivePlayer(updatedActivePlayer);
  };

  const modifyCards = (updatedArrayCards) => {
    setAsignedCards(updatedArrayCards);
  };

  const modifyWinner = (updatedWinner) => {
    setWinner(updatedWinner);
  };

  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <Panel
          cards={cards}
          asignedCards={asignedCards}
          players={players}
          onClick={(_, id, card) =>
            drawLetter(
              id,
              card,
              players,
              activePlayer,
              modifyPlayers,
              modifyActivePlayer,
              modifyWinner
            )
          }
        />
        <Button text="play" onClick={selectPlayers} id="buttonPlay" />
      </main>

      <dialog id="enterPlayers">
        <EnteringPlayers
          onSubmit={(e) =>
            play(e, players, modifyPlayers, modifyActivePlayer, modifyCards)
          }
        />
      </dialog>

      <dialog id="endScreen">
        <EndScreen
          players={players}
          winner={winner}
          restartPanel={() =>
            restartPanel(
              players[0].name,
              modifyCards,
              modifyActivePlayer,
              players,
              modifyPlayers
            )
          }
          restartAll={() =>
            restartAll(
              players[0].name,
              modifyCards,
              modifyActivePlayer,
              resetPlayers
            )
          }
        />
      </dialog>
    </>
  );
}

export default App;
