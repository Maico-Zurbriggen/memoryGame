const numberOfCouples = 15;
const numberOfCards = 30;
const numberOfSameCards = 2;
let positionCard = 0;

const assignCards = () => {
  const arrayCards = [];
  for (let i = 0; i < numberOfCards; i++) {
    do {
      positionCard = Math.floor(Math.random() * numberOfCouples);
    } while (arrayCards.reduce((acc, c) => acc + (c === positionCard), 0) === numberOfSameCards);
    arrayCards.push(positionCard);
  }
  
  return arrayCards;
};

export default assignCards;