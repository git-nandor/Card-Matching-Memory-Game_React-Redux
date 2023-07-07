import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import gameReducer from './gameReducer';

const gameStore = configureStore({
  reducer: gameReducer,
  middleware: [thunk],
});

export default gameStore;
