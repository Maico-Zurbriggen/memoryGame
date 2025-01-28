import { useState, useEffect } from "react";
import "./App.css";
import { Panel, Button, EnteringPlayers } from "./components";

const cards = [
  "🐶",
  "🐱",
  "🦁",
  "🦊",
  "🐰",
  "🐼",
  "🐻‍❄️",
  "🐨",
  "🐧",
  "🐵",
  "🐯",
  "🐴",
  "🦉",
  "🐷",
  "🐻",
];

function App() {
  const [asignedCards, setAsignedCards] = useState([]);
  const [activePlayer, setActivePlayer] = useState("");
  const [players, setPlayers] = useState([
    { name: "", bg: "bg-blue", color: "color-blue", points: 0 },
    { name: "", bg: "bg-red", color: "color-red", points: 0 },
    { name: "", bg: "bg-green", color: "color-green", points: 0 },
    { name: "", bg: "bg-orange", color: "color-orange", points: 0 },
  ]);

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

  const selectPlayers = () => {
    const enterPlayers = document.getElementById("enterPlayers");
    enterPlayers.showModal();
  };

  const play = (e) => {
    const playersNames = [];

    e.preventDefault();

    const panel = document.getElementById("panel");
    const buttonPlay = document.getElementById("buttonPlay");
    const enterPlayers = document.getElementById("enterPlayers");

    playersNames.push(document.getElementById("player1").value);
    playersNames.push(document.getElementById("player2").value);
    playersNames.push(document.getElementById("player3").value);
    playersNames.push(document.getElementById("player4").value);

    const updatedPlayers = players.map((player, i) => {
      return { ...player, name: playersNames[i] };
    })
    setPlayers(updatedPlayers);
    setActivePlayer(playersNames[0]);

    panel.classList.remove("hidden");
    panel.classList.add("panel");

    assignCards();

    buttonPlay.classList.add("hidden");

    enterPlayers.close();
  };

  const arrayCards = [];
  const max = 15;
  let card = 0;

  const assignCards = () => {
    for (let i = 0; i < 30; i++) {
      do {
        card = Math.floor(Math.random() * max);
      } while (arrayCards.reduce((acc, c) => acc + (c === card), 0) === 2);
      arrayCards.push(card);
    }
    setAsignedCards(arrayCards);
  };
  
  const showedCards = [];
  const showedCardsIds = [];

  const drawLetter = (e, id, card) => {
    const showCard = document.getElementById(id);
    const index = players.findIndex((player) => player.name === activePlayer);

    if (showedCards.length === 2 || showCard.classList.contains("visible")) return;

    showCard.classList.add("visible");

    showedCards.push(card);
    showedCardsIds.push(id);
  
    if (showedCards.length === 2) {
      const firstCard = document.getElementById(showedCardsIds[0]);
      const secondCard = document.getElementById(showedCardsIds[1]);

      if (showedCards[0] !== showedCards[1]) {
        setTimeout(() => {
          firstCard.classList.remove("visible");
          secondCard.classList.remove("visible");

          showedCards.length = 0;
          showedCardsIds.length = 0;

          setActivePlayer(players[(index + 1) % players.length].name);
        }, 500);
      } else {
        firstCard.parentElement.classList.add(players[index].bg);
        secondCard.parentElement.classList.add(players[index].bg);

        setPlayers(
          players.map((player) => {
            if (player.name === activePlayer) {
              return { ...player, points: player.points + 1 };
            }
            return player;
          })
        );

        showedCards.length = 0;
        showedCardsIds.length = 0;
      }
    }
  };

  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <Panel
          cards={cards}
          asignedCards={asignedCards}
          players={players}
          onClick={drawLetter}
        />
        <Button text="play" onClick={selectPlayers} id="buttonPlay" />
      </main>

      <dialog id="enterPlayers">
        <EnteringPlayers onSubmit={play} />
      </dialog>
    </>
  );
}

export default App;