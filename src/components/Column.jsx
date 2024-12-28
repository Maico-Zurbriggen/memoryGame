const Column = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 grid-rows-5 gap-4">
            {cards.map((card, index) => (
                <div key={index} className="bg-blue-500 text-white font-bold text-2xl flex justify-center items-center h-20">{card}</div>
            ))}
        </div>
    )
}

export default Column;