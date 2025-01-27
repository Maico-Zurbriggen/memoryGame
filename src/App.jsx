import { useState } from 'react'
import './App.css'
import { Panel, Button, EnteringPlayers } from './components'

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const selectPlayers = () => {
    const enterPlayers = document.getElementById("enterPlayers");
    enterPlayers.showModal();
  }

  const play = e => {
    e.preventDefault();

    const panel = document.getElementById("panel");
    const buttonPlay = document.getElementById("buttonPlay");
    const enterPlayers = document.getElementById("enterPlayers");

    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;
    const player3Name = document.getElementById("player3").value;
    const player4Name = document.getElementById("player4").value;

    setPlayer1(player1Name);
    setPlayer2(player2Name);
    setPlayer3(player3Name);
    setPlayer4(player4Name);
    
    panel.classList.remove("hidden");
    panel.classList.add("panel");
    buttonPlay.classList.add("hidden");
    enterPlayers.close();
  }

  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <Panel player1={player1} player2={player2} player3={player3} player4={player4} />
        <Button text="play" onClick={selectPlayers} id="buttonPlay" />
      </main>

      <dialog id='enterPlayers'>
        <EnteringPlayers onSubmit={play} />
      </dialog>
    </>
  )
}

export default App