import { Player, Card } from "./components";
import "./Panel.css";

const Panel = ({ cards, asignedCards, players, onClick }) => {
  return (
    <section className="panel hidden" id="panel">
      <ul className="players">
        {players.map((player, i) => (
          <Player key={i} name={player.name} bg={player.bg} color={player.color} id={player.name} points={player.points} />
        ))}
      </ul>
      <table>
        <tbody>
          <tr>
            {asignedCards
              .filter((c, i) => i < 6)
              .map((c, i) => (
                <Card key={i} id={i} card={cards[c]} onClick={onClick} />
              ))}
          </tr>
          <tr>
            {asignedCards
              .filter((c, i) => i >= 6 && i < 12)
              .map((c, i) => (
                <Card key={i} id={i + 6} card={cards[c]} onClick={onClick} />
              ))}
          </tr>
          <tr>
            {asignedCards
              .filter((c, i) => i >= 12 && i < 18)
              .map((c, i) => (
                <Card key={i} id={i + 12} card={cards[c]} onClick={onClick} />
              ))}
          </tr>
          <tr>
            {asignedCards
              .filter((c, i) => i >= 18 && i < 24)
              .map((c, i) => (
                <Card key={i} id={i + 18} card={cards[c]} onClick={onClick} />
              ))}
          </tr>
          <tr>
            {asignedCards
              .filter((c, i) => i >= 24 && i < 30)
              .map((c, i) => (
                <Card key={i} id={i + 24} card={cards[c]} onClick={onClick} />
              ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Panel;
