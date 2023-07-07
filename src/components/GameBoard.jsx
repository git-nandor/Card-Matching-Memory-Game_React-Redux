import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipCardAction, startGameAction } from "../redux/gameActions";
import { BEST_TRIES_LABEL, CURRENT_TRIES_LABEL, GAME_RESTART_BTN } from "../strings";

const GameBoard = () => {
    const dispatch = useDispatch();  
    const gameState = useSelector((gameState) => gameState);

    const handleClickRestart = () => {
      console.log('game restart with state: ', gameState)
      dispatch(startGameAction());  
    };
    
    const handleClickCard = () => {
      console.log('card clicked')
      dispatch(flipCardAction());  
    };

  return (
    <div className="game-board-container">
      <div className="game-board-header">
        <div className="current-tries">{CURRENT_TRIES_LABEL}1</div>
        <div className="tries-record">{BEST_TRIES_LABEL}0</div>

        <button id="button-restart" onClick={handleClickRestart}>
          {GAME_RESTART_BTN}
        </button>
      </div>
      <div className="game-board">
        {Array.from({ length: gameState.deckSize }).map((_c, index) => (
          <div key={index} className="card" onClick={handleClickCard}>
            <div className="card-inner">
              <div className="card-front">
                <img src={require(`../images/question-cat.png`)} alt="game card" />
              </div>
              <div className="card-back">
                <img src={require(`../images/card1.png`)} alt="game card" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GameBoard;
