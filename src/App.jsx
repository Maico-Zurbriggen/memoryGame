import { useState } from 'react'
import './App.css'
import { Panel, Button, EnteringPlayers } from './components'

const cards = [[1, 1, 2, 2, 3], [3, 4, 4, 5, 5], [6, 6, 7, 7, 8], [8, 9, 9, 10, 10], [11, 11, 12, 12, 13], [13, 14, 14, 15, 15]]

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const selectPlayers = () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
  }

  const play = e => {
    e.preventDefault();

    const panel = document.getElementById("panel");
    const jugar = document.getElementById("jugar");
    const dialog = document.querySelector("dialog");

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
    jugar.classList.add("hidden");
    dialog.classList.add("hidden");
  }

  return (
    <>
      <main>
        <h1 className='title'>Memory Game</h1>
        <Panel cards={cards} player1={player1} player2={player2} player3={player3} player4={player4} />
        <Button text="jugar" onClick={selectPlayers} id="jugar" />
      </main>

      <dialog>
        <EnteringPlayers onSubmit={play} />
      </dialog>
    </>
  )
}

export default App