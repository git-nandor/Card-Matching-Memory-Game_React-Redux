import { flipBackCardsAction } from "./gameActions";

let flipBackTimeoutID = null;

export const delayedFlipBackCardsThunk = (delay) => async (dispatch, getState) => {
  const { isMatchFound } = getState();
  
  if (!isMatchFound && flipBackTimeoutID === null) {
    flipBackTimeoutID = setTimeout(() => {
      dispatch(flipBackCardsAction());
      flipBackTimeoutID = null;
    }, delay);
  }
};

export const immediateFlipBackCardsThunk = () => async (dispatch) => {
  if (flipBackTimeoutID !== null) {
    clearTimeout(flipBackTimeoutID);
    flipBackTimeoutID = null;
    dispatch(flipBackCardsAction());
  }
};

export const clearFlipBackCardsThunk = () => async () => {
  clearTimeout(flipBackTimeoutID);
};
