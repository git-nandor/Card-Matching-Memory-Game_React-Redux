import React from "react";
import { BEST_TRIES_LABEL, CURRENT_TRIES_LABEL, GAME_RESTART_BTN } from "./strings";

const GameBoard = () => {
  const handleClickRestart = () => {
    console.log("RESTART");
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
        {Array.from({ length: 10 }).map((_c, index) => (
          <div key={index} className="card" onClick={() => console.log(index + 1)}>
            <div className="card-inner">
              <div className="card-front">
                <img src={require(`../images/card-front.png`)} alt="game card" />
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
