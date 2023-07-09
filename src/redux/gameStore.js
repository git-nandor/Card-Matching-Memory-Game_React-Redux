import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import gameReducer from './gameReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, gameReducer);

const gameStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(gameStore)

export { gameStore, persistor };
