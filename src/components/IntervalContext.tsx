import React, { createContext, useContext, useState, useRef } from 'react';

const IntervalContext = createContext(null);

export const useInterval = () => {
  return useContext(IntervalContext);
};

export const IntervalProvider = ({ children }) => {
  const intervalRef = useRef(null);

  const startInterval = (callback) => {
    intervalRef.current = setInterval(callback, 100);
  };

  const clearCustomInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <IntervalContext.Provider value={{ startInterval, clearCustomInterval }}>
      {children}
    </IntervalContext.Provider>
  );
};
