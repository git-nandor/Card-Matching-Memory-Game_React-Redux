import { createContext, useState } from 'react';

const FlipContext = createContext();

export const FlipCounterProvider = ({ children }) => {
  const [flipCounter, setFlipCounter] = useState(0);

  return (
    <FlipContext.Provider value={{ flipCounter, setFlipCounter }}>
      {children}
    </FlipContext.Provider>
  );
};

export default FlipContext;