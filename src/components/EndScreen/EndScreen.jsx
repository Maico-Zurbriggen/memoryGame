import { useState } from "react";
import { Button } from "..";
import { ResultsTable } from "./components";

const EndScreen = ({ players, winnerName }) => {
  const [winner, setWinner] = useState("");

  if (winnerName !== winner) {
    setWinner(winnerName);
  }

  return (
    <>
      <h2>End Of The Game</h2>
      <h3>The Winner Is {winner}</h3>
      <ResultsTable players={players} />
      <Button
        text="Play Again"
        onClick={() => console.log("Play Again")}
        id="restartPanelButton"
      />
      <Button
        text="Return to Menu"
        onClick={() => console.log("Return to Menu")}
        id="restartAllButton"
      />
    </>
  );
};

export default EndScreen;