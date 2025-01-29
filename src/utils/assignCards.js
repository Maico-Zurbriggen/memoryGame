const arrayCards = [];
const max = 15;
let card = 0;

const assignCards = () => {
  for (let i = 0; i < 30; i++) {
    do {
      card = Math.floor(Math.random() * max);
    } while (arrayCards.reduce((acc, c) => acc + (c === card), 0) === 2);
    arrayCards.push(card);
  }
  
  return arrayCards;
};

export default assignCards;