import { actionTypes } from './gameActions';
import { generateCards, flipCard, matchCards, checkForWin } from '../utils/helperFunctions';

  
  const initialState = {
    deckSize: 10,
    cards: [],
    gameStatus: 'not_started', // or 'in_progress', 'finished'
  };
  
  function gameReducer(gameState = initialState, action) {
    switch (action.type) {
      case actionTypes.START_GAME:
        const cards = generateCards(gameState.deckSize);
        return {
          ...gameState,
          cards,
          gameStatus: 'in_progress',
        };
      case actionTypes.FLIP_CARD:
        const flippedCards = flipCard(action.payload, gameState.cards);
        return {
          ...gameState,
          cards: flippedCards
        };
      case actionTypes.CHECK_MATCH:
        const matchedCards = matchCards(gameState.cards);
        // TODO thunk for finish if all matched...
        return {
          ...gameState,
          cards: matchedCards
        };
      case actionTypes.FINISH_GAME:
        const isWin = checkForWin(gameState.cards);
        return {
          ...gameState,
          gameStatus: isWin ? 'finished' : 'in_progress' };
      default:
        return gameState;
    }
  }
  export default gameReducer;
  