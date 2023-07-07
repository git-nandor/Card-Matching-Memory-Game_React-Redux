import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkMatchAction, finishGameAction, flipUpCardAction } from "../redux/gameActions";
import useGameActions from "../utils/useGameActions";
import { delayedFlipBackCardsThunk, immediateFlipBackCardsThunk  } from "../redux/gameThunk";
import { BEST_TRIES_LABEL, CURRENT_TRIES_LABEL, GAME_RESTART_BTN, STATUS_FINISHED, WIN_MESSAGE } from "../strings";

const GameBoard = () => {
    const dispatch = useDispatch();  
    const { handleStartGame } = useGameActions();
    const { cards, triesCount, gameStatus } = useSelector((gameState) => gameState);
    const [flipCounter, setFlipCounter] = useState(0);

    const handleOnClickRestart = () => {
      setFlipCounter(0);
      handleStartGame();  
    };
    
    const handleOnClickCard = (id) => {
      dispatch(immediateFlipBackCardsThunk());
      dispatch(flipUpCardAction(id));
      setFlipCounter(flipCounter + 1);
    };

    useEffect(() => {
      if (flipCounter % 2 === 0) {
        dispatch(checkMatchAction());
        dispatch(delayedFlipBackCardsThunk(2000));
        dispatch(finishGameAction());
      }
    }, [dispatch, flipCounter]);

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

  return (
    <div className="game-board-container">
      <div className="game-board-header">
        <div className="current-tries">{CURRENT_TRIES_LABEL}{triesCount}</div>
        <div className="tries-record">{BEST_TRIES_LABEL}0</div>

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
