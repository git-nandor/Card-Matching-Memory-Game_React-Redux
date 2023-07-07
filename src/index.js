import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import gameStore from "./redux/gameStore";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={gameStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
