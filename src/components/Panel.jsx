import { Column } from ".";

const Panel = ({ cards }) => {
    return (
        <div className="grid grid-cols-6 grid-rows-1 gap-4 hidden">
            {cards.map((card, index) => (
                <Column key={index} cards={card} />
            ))}
        </div>
    )
}

export default Panel;