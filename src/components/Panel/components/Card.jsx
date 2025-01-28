const Card = ({ id, card, onClick }) => {
  return (
    <td className="card" onClick={(e) => onClick(e, id, card)}>
      <p className="transparent" id={id}>
        {card}
      </p>
    </td>
  );
};

export default Card;
