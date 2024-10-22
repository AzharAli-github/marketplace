import React, { createContext, useState, useEffect, useContext } from 'react';

export const Context = createContext();

export const ProductProvider = ({ children }) => {

  const [count, setCount] = useState(0);  

  return (
    <Context.Provider value={{count, setCount}}>
      {children}
    </Context.Provider>
  );

};


export const useCounter = () => {
  return useContext(Context);
}