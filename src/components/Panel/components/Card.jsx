const Card = ({ id, card, drawLetter }) => {
  return (
    <div className="card flex-center" onClick={(e) => drawLetter(e, id, card)}>
      <p id={id}>
        {card}
      </p>
    </div>
  );
};

export default Card;
