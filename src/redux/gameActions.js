export const actionTypes = {
  PREPARE_DECK_SIZE: 'PREPARE_DECK_SIZE',
  START_GAME: 'START_GAME',
  FLIP_UP_CARD: 'FLIP_UP_CARD',
  CHECK_MATCH: 'CHECK_MATCH',
  FLIP_BACK_CARDS: 'FLIP_BACK_CARDS',
  FINISH_GAME: 'FINISH_GAME'
};

export const prepareDeckSizeAction = (deckSize) => ({
  type: actionTypes.PREPARE_DECK_SIZE,
  payload: deckSize
});

export const startGameAction = (startTypeFlag) => ({
  type: actionTypes.START_GAME,
  payload: startTypeFlag
});

export const flipUpCardAction = (id) => ({
  type: actionTypes.FLIP_UP_CARD,
  payload: id
});

export const checkMatchAction = () => ({
  type: actionTypes.CHECK_MATCH
});

export const flipBackCardsAction = () => ({
  type: actionTypes.FLIP_BACK_CARDS
});

export const finishGameAction = () => ({
  type: actionTypes.FINISH_GAME
});
