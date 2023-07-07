import { actionTypes } from './gameActions';
import { generateCards, flipCard, matchCards, checkForWin, flipBackCards } from '../utils/helperFunctions';
import { STATUS_FINISHED, STATUS_IN_PROGRESS, STATUS_NOT_STARTED } from '../strings';

  const initialState = {
    gameStatus: STATUS_NOT_STARTED,
    isMatchFound: false,
    deckMaxSize: 10,
    deckMinSize: 3,
    deckSize: 10,
    triesCount: 0,
    cards: [],
  };
  
  function gameReducer(gameState = initialState, action) {
    switch (action.type) {
      case actionTypes.SET_DECK_SIZE:
        return {
          ...gameState,
          deckSize: action.payload,
        };
      case actionTypes.START_GAME:
        const cards = generateCards(gameState.deckSize);
        return {
          ...gameState,
          cards,
          gameStatus: STATUS_IN_PROGRESS,
        };
      case actionTypes.FLIP_UP_CARD:
        const flippedCards = flipCard(action.payload, gameState.cards);
        return {
          ...gameState,
          cards: flippedCards,
        };
      case actionTypes.CHECK_MATCH:
        const { cards: matchedCards, isMatchFound } = matchCards(gameState.cards);
        return {
          ...gameState,
          cards: matchedCards,
          isMatchFound
        };  
      case actionTypes.FLIP_BACK_CARDS:
        const backFlippedCards = flipBackCards(gameState.cards);
        return {
          ...gameState,
          cards: backFlippedCards,
          triesCount: gameState.triesCount + 1,
        };  
      case actionTypes.FINISH_GAME:
        const isWin = checkForWin(gameState.cards);
        return {
          ...gameState,
          gameStatus: isWin ? STATUS_FINISHED : STATUS_IN_PROGRESS,
        };
      default:
        return gameState;
    }
  }
  export default gameReducer;
  