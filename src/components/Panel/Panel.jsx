import { Player, Card } from "./components";
import { Button } from "..";
import "./Panel.css";

const Panel = ({ cards, asignedCards, players, drawLetter, restartAll }) => {
  return (
    <section className="panel flex-center w-100 hidden" id="panel">
      <ul className="players flex-center w-100">
        {players.map((player, i) => {
          if (player.name !== "") {
            return (
              <Player
                key={i}
                name={player.name}
                bg={player.bg}
                color={player.color}
                id={player.name}
                points={player.points}
              />
            );
          }
        })}
      </ul>
      <div className="cards w-100">
        {asignedCards.map((c, i) => (
          <Card key={i} id={i} card={cards[c]} drawLetter={drawLetter} />
        ))}
      </div>
      <Button onClick={restartAll} text="Restart" id="restartButton" />
    </section>
  );
};

export default Panel;
