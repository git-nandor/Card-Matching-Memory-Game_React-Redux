import React from "react";
import { DECK_SIZE_LABEL, GAME_START_BTN } from "./strings";

const GameOptions = () => {
  const handleOnChangeSelect = () => {
    console.log("SELECT");
  };

  const handleStartGame = () => {
    console.log("START");
  };

  return (
    <div className={"game-options"}>
      <label htmlFor="deck-size-select">{DECK_SIZE_LABEL}</label>

      <select id="deck-size-select" value={10} onChange={handleOnChangeSelect}>
        {Array.from({ length: 10 })
          .map((_c, index) => <option value={index+1}>{index+1}</option>)
          .reverse()}
      </select>

      <div className="button-container">
        <button id="button-start" onClick={handleStartGame}>
          {GAME_START_BTN}
        </button>
      </div>
    </div>
  );
};
export default GameOptions;
