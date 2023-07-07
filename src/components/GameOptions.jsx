import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useGameActions from "../utils/useGameActions";
import { DECK_SIZE_LABEL, GAME_START_BTN } from "../strings";
import { setDeckSizeAction } from "../redux/gameActions";

const GameOptions = () => {
  const dispatch = useDispatch(); 
  const { handleStartGame } = useGameActions();
  const { deckSize, deckMinSize, deckMaxSize } = useSelector((gameState) => gameState);

  const handleOnChangeDeckSize = (e) => {
    dispatch(setDeckSizeAction(parseInt(e.target.value)));
  }

  const createSelectOptions = (deckMinSize, deckMaxSize) => {
    const options = Array.from({ length: deckMaxSize - deckMinSize + 1 })
    .map((_, index) => <option key={index} value={deckMinSize + index}>{deckMinSize + index}</option>)
    .reverse();

    return options;
  }

  return (
    <div className={"game-options"}>
      <label htmlFor="deck-size-select">{DECK_SIZE_LABEL}</label>
      <select id="deck-size-select" value={deckSize} onChange={handleOnChangeDeckSize}>
        {createSelectOptions(deckMinSize, deckMaxSize)}
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
