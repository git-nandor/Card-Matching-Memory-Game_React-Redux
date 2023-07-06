import React from "react";
import { GAME_RULES, GAME_RULES_TITLE, GAME_TITLE } from "../strings";

const GameInfo = () => {
  return (
    <div className="game-info">
      <h1>{GAME_TITLE}</h1>
      <h2>{GAME_RULES_TITLE}</h2>
      <p>{GAME_RULES}</p>
    </div>
  );
};
export default GameInfo;
