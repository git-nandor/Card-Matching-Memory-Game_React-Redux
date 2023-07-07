import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameReducer';

const gameStore = configureStore({
  reducer: gameReducer
});

export default gameStore;
