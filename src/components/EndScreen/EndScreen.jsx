import { Button } from "..";
import { ResultsTable } from "./components";
import "./EndScreen.css";

const EndScreen = ({ players, winner, restartPanel, restartAll }) => {
  return (
    <>
      <h2>End Of The Game</h2>
      <h3>{winner}</h3>
      <ResultsTable players={players} />
      <div className="flex-center">
        <Button
          text="Play Again"
          onClick={restartPanel}
          id="restartPanelButton"
        />
        <Button
          text="Return to Menu"
          onClick={restartAll}
          id="restartAllButton"
        />
      </div>
    </>
  );
};

export default EndScreen;
