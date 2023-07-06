import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import ErrorFallback from "./pages/ErrorFallback";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<ErrorFallback />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
