import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useGameActions from "../utils/useGameActions";
import { prepareDeckSizeAction } from "../redux/gameActions";
import { DECK_SIZE_LABEL, GAME_START_BTN } from "../strings";
import { NORMAL_START_FLAG } from "../gameOptionsController";

const GameOptions = () => {
  const dispatch = useDispatch(); 
  const { handleStartGame } = useGameActions();

  const preparedDeckSize = useSelector((state) => state.preparedDeckSize);
  const deckMinSize = useSelector((state) => state.deckMinSize);
  const deckMaxSize = useSelector((state) => state.deckMaxSize);

  const handleOnChangeDeckSize = (e) => {
    dispatch(prepareDeckSizeAction(parseInt(e.target.value)));
  }

  const handleOnClickStart = (_e) => {
    handleStartGame(NORMAL_START_FLAG)
  }

  const createSelectOptions = (deckMinSize, deckMaxSize) => {
    const options = Array.from({ length: deckMaxSize - deckMinSize + 1 })
    .map((_, index) => <option key={index} value={deckMinSize + index}>{(deckMinSize + index) * 2}</option>)
    .reverse();

    return options;
  }

  return (
    <div className={"game-options"}>
      <label htmlFor="deck-size-select">{DECK_SIZE_LABEL}</label>
      <select id="deck-size-select" value={preparedDeckSize} onChange={handleOnChangeDeckSize}>
        {createSelectOptions(deckMinSize, deckMaxSize)}
      </select>

      <div className="button-container">
        <button id="button-start" onClick={handleOnClickStart}>
          {GAME_START_BTN}
        </button>
      </div>
    </div>
  );
};
export default GameOptions;
