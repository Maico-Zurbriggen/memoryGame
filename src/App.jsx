import { useState } from 'react'
import './App.css'
import { Panel, Button, EnteringPlayers } from './components'

const cards = ["🐶","🐱","🦁","🦊","🐰","🐼","🐻‍❄️","🐨","🐧","🐵","🐯","🐴","🦉","🐷","🐻"];

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const [asignedCards, setAsignedCards] = useState([]);

  const arrayCards = [];
  const max = 15;
  let card = 0;

  const assignCards = () => {
    for (let i = 0; i < 30; i++) {
      do {
        card = Math.floor(Math.random() * max)
      } while (arrayCards.reduce((acc, c) => acc + (c === card), 0) === 2);
      arrayCards.push(card);
    }
    console.log(asignedCards);
    setAsignedCards(arrayCards);
  }

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
    
    assignCards();

    buttonPlay.classList.add("hidden");

    enterPlayers.close();
  }

  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <Panel cards={cards} asignedCards={asignedCards} player1={player1} player2={player2} player3={player3} player4={player4} />
        <Button text="play" onClick={selectPlayers} id="buttonPlay" />
      </main>

      <dialog id='enterPlayers'>
        <EnteringPlayers onSubmit={play} />
      </dialog>
    </>
  )
}

export default App