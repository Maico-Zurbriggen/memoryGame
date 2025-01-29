const Card = ({ id, card, onClick }) => {
  return (
    <div className="card" onClick={(e) => onClick(e, id, card)}>
      <p className="transparent" id={id}>
        {card}
      </p>
    </div>
  );
};

export default Card;
