import { Column, Player } from ".";

const Panel = ({ cards, player1, player2, player3, player4 }) => {
    return (
        <div id="panel" className="hidden absolute top-[50%] left-[50%] w-screen h-sreen">
            <div className="flex justify-around">
                <Player name={player1} color="red" />
                <Player name={player2} color="blue" />
                <Player name={player3} color="green" />
                <Player name={player4} color="yellow" />
            </div>
            <div className="grid grid-cols-6 grid-rows-1 gap-4">
                {cards.map((card, index) => (
                    <Column key={index} cards={card} />
                ))}
            </div>
        </div>
    )
}

export default Panel;