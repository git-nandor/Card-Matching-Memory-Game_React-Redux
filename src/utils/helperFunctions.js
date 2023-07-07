import { v4 as uuidv4 } from "uuid";

export const generateCards = (deckSize) => {
  const cards = [];

  // For each image, create two cards based on given deckSize
  // Required image file naming: card1.png, card2.png ...
  Array.from({ length: deckSize }).forEach((_card, index) => {
    const cardPairPart1 = {
      id: uuidv4(),
      image: `card${index + 1}.png`,
      isFlipped: false,
      isMatched: false,
    };

    const cardPairPart2 = { ...cardPairPart1, id: uuidv4() };
    cards.push(cardPairPart1, cardPairPart2);
  });

  // Randomize cards
  cards.sort(() => Math.random() - 0.5);

  return cards;
};

export const flipCard = (flippedId, cards) => {
  const flippedCards = cards.map((card) =>
    card.id === flippedId ? { ...card, isFlipped: true } : card
  );

  return flippedCards;
};

export const matchCards = (cards) => {
  const flippedCards = cards.filter(card => card.isFlipped && !card.isMatched);

  if (flippedCards.length !== 2) {
    return cards;
  }

  const isPairFound = flippedCards[0].image === flippedCards[1].image;

  return cards.map(card => {
    if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
      return {
        ...card,
        isMatched: isPairFound,
        isFlipped: isPairFound,
      };
    } else {
      return card;
    }
  });
};

export const checkForWin = (cards) => {
  const isAllMatched = cards.every(card => card.isMatched);

  return isAllMatched;
}