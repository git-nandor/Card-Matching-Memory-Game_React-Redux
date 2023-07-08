import { v4 as uuidv4 } from "uuid";
import { INITIAL_BEST_TRIES_RECORD_VALUE, RESTART_FLAG } from "../gameOptionsController";

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
  if (flippedCards.length !== 2) return { matchedCardsData: cards, isMatchCardsFound: false };

  const isPairFound = flippedCards[0]?.image === flippedCards[1]?.image;
  if (!isPairFound) return { matchedCardsData: cards, isMatchCardsFound: false };

  return { 
    matchedCardsData: cards.map(card => 
      (card.id === flippedCards[0].id || card.id === flippedCards[1].id) 
        ? { ...card, isMatched: true }
        : card
    ),
    isMatchCardsFound: true,
  };
};

export const flipBackCards = (cards) => {
  return cards.map(card => 
    (card.isFlipped && !card.isMatched) 
      ? { ...card, isFlipped: false }
      : card
  );
};

export const checkForWin = (cards) => {
  const isAllMatched = cards.every(card => card.isMatched);

  return isAllMatched;
}

export const generateRecords = (bestTriesRecords, deckMinSize, deckMaxSize) => {
  const records = {};

  for (let size = deckMinSize; size <= deckMaxSize; size++) {
    records[size] = bestTriesRecords[size] || INITIAL_BEST_TRIES_RECORD_VALUE;
  }
  return records;
};

export const getStartingDeckSize = (startTypeFlag, preparedDeckSize, deckSize) => {
  if (startTypeFlag === RESTART_FLAG) {
    return deckSize;
  }

  return preparedDeckSize;
};

export const getNewRecords = (isWin, bestTriesRecords, triesCount, deckSize) => {
  if (isWin && triesCount < bestTriesRecords[deckSize]) {
    return { ...bestTriesRecords, [deckSize]: triesCount };
  }
  return { ...bestTriesRecords };
};
