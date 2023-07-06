import React from "react";
import Header from "./components/Header";
import GameInfo from "./components/GameInfo";
import GameOptions from "./components/GameOptions";
import GameBoard from "./components/GameBoard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameInfo />
      <GameOptions />
      <GameBoard />
    </div>
  );
};

export default App;
