import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import ErrorFallbackPage from "./pages/ErrorFallbackPage";
import { ROUTE_PATH_HOME, ROUTE_PATH_GAME, ROUTE_PATH_FALLBACK } from "./strings";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path={ROUTE_PATH_HOME} element={<Home />} />
          <Route path={ROUTE_PATH_GAME} element={<Game />} />
          <Route path={ROUTE_PATH_FALLBACK} element={<ErrorFallbackPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
