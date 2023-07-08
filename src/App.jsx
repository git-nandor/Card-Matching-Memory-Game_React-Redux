import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlipCounterProvider } from "./contexts/FlipContext";
import Home from "./pages/Home";
import Game from "./pages/Game";
import ErrorFallback from "./pages/ErrorFallback";
import {
  ROUTE_PATH_HOME,
  ROUTE_PATH_GAME,
  ROUTE_PATH_FALLBACK,
} from "./strings";
import "./App.css";

const App = () => {
  return (
    <FlipCounterProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path={ROUTE_PATH_HOME} element={<Home />} />
            <Route path={ROUTE_PATH_GAME} element={<Game />} />
            <Route path={ROUTE_PATH_FALLBACK} element={<ErrorFallback />} />
          </Routes>
        </div>
      </Router>
    </FlipCounterProvider>
  );
};
export default App;
