import { Column, Player } from "./components";
import './Panel.css'

const Panel = ({ cards, player1, player2, player3, player4 }) => {
    return (
        <div id="panel" className="hidden">
            <div className="players">
                <Player name={player1} bg="bg-blue" />
                <Player name={player2} bg="bg-red" />
                <Player name={player3} bg="bg-green" />
                <Player name={player4} bg="bg-orange" />
            </div>
            <div className="cards-rows">
                {cards.map((card, index) => (
                    <Column key={index} cards={card} />
                ))}
            </div>
        </div>
    )
}

export default Panel;