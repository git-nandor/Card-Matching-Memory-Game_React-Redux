import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkMatchAction, finishGameAction, flipUpCardAction } from "../redux/gameActions";
import useGameActions from "../utils/useGameActions";
import { delayedFlipBackCardsThunk, immediateFlipBackCardsThunk  } from "../redux/gameThunk";
import { BEST_TRIES_LABEL, CURRENT_TRIES_LABEL, GAME_RESTART_BTN, STATUS_FINISHED, WIN_MESSAGE } from "../strings";
import { RESTART_FLAG, INITIAL_BEST_TRIES_RECORD_VALUE } from "../gameOptionsController";

const GameBoard = () => {
    const dispatch = useDispatch();  
    const { handleStartGame } = useGameActions();

    const bestTriesRecords = useSelector((state) => state.bestTriesRecords);
    const cards = useSelector((state) => state.cards);
    const deckSize = useSelector((state) => state.deckSize);
    const gameStatus = useSelector((state) => state.gameStatus);
    const flipCount = useSelector((state) => state.flipCount);
    const triesCount = useSelector((state) => state.triesCount);

    const handleOnClickRestart = (_e) => {
      handleStartGame(RESTART_FLAG);  
    };
    
    const handleOnClickCard = (id) => {
      dispatch(immediateFlipBackCardsThunk());
      dispatch(flipUpCardAction(id));
    };

    useEffect(() => {
      const isAnyCardsFlipped = cards.some(card => card.isFlipped && !card.isMatched);
      
      if (isAnyCardsFlipped && flipCount % 2 === 0) {
        dispatch(checkMatchAction());
        dispatch(delayedFlipBackCardsThunk(2000));
        dispatch(finishGameAction());
      }
    }, [flipCount, cards]);

    const createCards = (cards) => {
      const createdCards = cards.map((card, _index) => {
        const cardClasses = ["card"];
        let cardClickHandler = () => handleOnClickCard(card.id);

        if (card.isFlipped) {
          cardClasses.push("flipped") ;
          cardClickHandler = () => {};
        };

        if (card.isMatched) {
          cardClasses.push("matched") ;
          cardClickHandler = () => {};
        };

        return (
          <div
            key={card.id}
            id={card.id}
            className={cardClasses.join(" ")}
            onClick={cardClickHandler}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={require(`../images/question-cat.png`)}
                  alt="game card front"
                />
              </div>
              <div className="card-back">
                <img
                  src={require(`../images/${card.image}`)}
                  alt="game card back"
                />
              </div>
            </div>
          </div>
        );
      });

      return createdCards;
    };
    
    const createWinMessage = () => {
      if(gameStatus === STATUS_FINISHED) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return (
          <div className="win-message">{WIN_MESSAGE}</div>
        )
      }
    }

  const getBestTriesRecord = (bestTriesRecords, deckSize) => {
    const bestRecord = bestTriesRecords[deckSize] || INITIAL_BEST_TRIES_RECORD_VALUE;
  
    return (<div className="best-record">{bestRecord === INITIAL_BEST_TRIES_RECORD_VALUE ? '0' : bestRecord}</div>);
  }

  return (
    <div className="game-board-container">
      <div className="game-board-header">
        <div className="game-board-info">{CURRENT_TRIES_LABEL}<span className="tries-count">{triesCount}</span></div>
        <div className="game-board-info">{BEST_TRIES_LABEL}<span className="best-tries">{getBestTriesRecord(bestTriesRecords, deckSize)}</span></div>

        <button id="button-restart" onClick={handleOnClickRestart}>
          {GAME_RESTART_BTN}
        </button>
      </div>
      {createWinMessage()}
      <div className="game-board">
        {createCards(cards)}
      </div>
    </div>
  );
};
export default GameBoard;
