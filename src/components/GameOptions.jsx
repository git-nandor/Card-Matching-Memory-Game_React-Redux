import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGameAction } from "../redux/gameActions";
import { DECK_SIZE_LABEL, GAME_START_BTN, ROUTE_PATH_GAME } from "../strings";

const GameOptions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const gameState = useSelector((gameState) => gameState);

  const handleChangeSelect = () => {
    console.log("SELECT");
  };

  const handleStartGame = () => {
    console.log("StartGame");
    dispatch(startGameAction());
    navigate(ROUTE_PATH_GAME);
  }

  return (
    <div className={"game-options"}>
      <label htmlFor="deck-size-select">{DECK_SIZE_LABEL}</label>

      <select id="deck-size-select" value={gameState.deckSize} onChange={handleChangeSelect}>
        {Array.from({ length: 10 })
          .map((_c, index) => <option key={index} value={index+1}>{index+1}</option>)
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
