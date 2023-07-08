import { actionTypes } from './gameActions';
import { generateCards, flipCard, matchCards, checkForWin, flipBackCards, generateRecords, getStartingDeckSize, getNewRecords } from '../utils/helperFunctions';
import { STATUS_FINISHED, STATUS_IN_PROGRESS, STATUS_NOT_STARTED } from '../strings';
import { INITIAL_DECK_MAX_SIZE, INITIAL_DECK_MIN_SIZE, INITIAL_DECK_SIZE } from '../gameOptionsController';

  const initialState = {
    gameStatus: STATUS_NOT_STARTED,
    isMatchFound: false,
    preparedDeckSize: INITIAL_DECK_SIZE,
    deckSize: INITIAL_DECK_SIZE,
    deckMaxSize: INITIAL_DECK_MAX_SIZE,
    deckMinSize: INITIAL_DECK_MIN_SIZE,
    triesCount: 0,
    cards: [ ],
    bestTriesRecords: { }
  };
  
  function gameReducer(gameState = initialState, action) {
    // const { gameStatus, isMatchFound, preparedDeckSize, deckSize, deckMaxSize, deckMinSize, triesCount, cards, bestTriesRecords } = gameState;

    switch (action.type) {
      case actionTypes.PREPARE_DECK_SIZE:
        return {
          ...gameState,
          preparedDeckSize: action.payload,
        };
      case actionTypes.START_GAME:
        const startingDeckSize = getStartingDeckSize(action.payload, gameState.preparedDeckSize, gameState.deckSize);
        const cards = generateCards(startingDeckSize, action.payload);
        const records = generateRecords(gameState.bestTriesRecords, gameState.deckMinSize, gameState.deckMaxSize);
        return {
          ...gameState,
          gameStatus: STATUS_IN_PROGRESS,
          cards,
          triesCount: 0,
          bestTriesRecords: records,
          deckSize: startingDeckSize,
        };
      case actionTypes.FLIP_UP_CARD:
        const flippedCards = flipCard(action.payload, gameState.cards);
        return {
          ...gameState,
          cards: flippedCards,
        };
      case actionTypes.CHECK_MATCH:
        const { matchedCardsData: matchedCards, isMatchCardsFound } = matchCards(gameState.cards);
        return {
          ...gameState,
          cards: matchedCards,
          isMatchFound: isMatchCardsFound,
        };  
      case actionTypes.FLIP_BACK_CARDS:
        const backFlippedCards = flipBackCards(gameState.cards);
        return {
          ...gameState,
          cards: backFlippedCards,
          triesCount: gameState.gameStatus === STATUS_IN_PROGRESS ? gameState.triesCount + 1 : gameState.triesCount,
        };  
      case actionTypes.FINISH_GAME:
        const isWin = checkForWin(gameState.cards);
        const newRecords = getNewRecords(isWin, gameState.bestTriesRecords, gameState.triesCount, gameState.deckSize);
        return {
          ...gameState,
          gameStatus: isWin ? STATUS_FINISHED : STATUS_IN_PROGRESS,
          bestTriesRecords: newRecords,
        };
      default:
        return gameState;
    }
  }
  export default gameReducer;
  