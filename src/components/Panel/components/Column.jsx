const Column = ({ cards }) => {
    return (
        <div className="cards-columns">
            {cards.map((card, index) => (
                <div key={index} className="card">{card}</div>
            ))}
        </div>
    )
}

export default Column;