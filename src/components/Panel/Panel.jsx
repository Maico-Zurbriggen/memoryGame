import { Player, Card } from "./components";
import "./Panel.css";

const Panel = ({ cards, asignedCards, players, onClick }) => {
  return (
    <section className="panel hidden" id="panel">
      <ul className="players">
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
      <div className="cards">
        {asignedCards.map((c, i) => (
          <Card key={i} id={i} card={cards[c]} onClick={onClick} />
        ))}
      </div>
    </section>
  );
};

export default Panel;
