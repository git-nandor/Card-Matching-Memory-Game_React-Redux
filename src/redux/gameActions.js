export const actionTypes = {
  START_GAME: 'START_GAME',
  FLIP_CARD: 'FLIP_CARD',
  CHECK_MATCH: 'CHECK_MATCH',
  FINISH_GAME: 'FINISH_GAME'
};

export const startGameAction = () => ({
  type: actionTypes.START_GAME
});

export const flipCardAction = (id) => ({
  type: actionTypes.FLIP_CARD,
  payload: id
});

export const checkMatchAction = () => ({
  type: actionTypes.CHECK_MATCH
});

export const finishGameAction = () => ({
  type: actionTypes.FINISH_GAME
});
