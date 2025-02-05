const numberOfCards = 30;
let positionCard = 0;
let indexOfUnselectedCards = 0;

/*
Esta función se encarga de crear un array de 30 elementos los cuales son las posiciones de los emojis
en la constante cards, solo puede haber 2 de cada emoji y la carga de posiciones se realiza de forma random
*/

const assignCards = () => {
  const unselectedCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const arrayCards = [];
  for (let i = 0; i < numberOfCards; i++) {
    indexOfUnselectedCards = Math.floor(Math.random() * unselectedCards.length);
    positionCard = unselectedCards[indexOfUnselectedCards];
    if ( arrayCards.includes(positionCard) ) {
      unselectedCards.splice(indexOfUnselectedCards, 1);
    }
    arrayCards.push(positionCard);
  }

  return arrayCards;
};

export default assignCards;