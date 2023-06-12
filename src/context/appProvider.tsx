import React, { createContext } from 'react';

interface IAppContextProvide {
  children: React.ReactNode;
}

const AppContext = createContext({});

const AppContextProvider = ({ children }: IAppContextProvide) => {
  const values = {};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
