import React from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import ErrorTrigger from "../components/ErrorTrigger";

const Game = () => {
  return (
    <>
      <Header />
      <GameBoard />
      <ErrorTrigger />
    </>
  );
};
export default Game;
