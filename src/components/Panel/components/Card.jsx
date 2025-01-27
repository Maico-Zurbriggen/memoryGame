const Card = ({ id, card }) => {
    const drawLetter = () => {
        const card = document.getElementById(id);
        card.classList.toggle('visible');
    }

    return (
        <td className="card" onClick={drawLetter}>
            <p className="transparent" id={id}>{card}</p>
        </td>
    )
}

export default Card;