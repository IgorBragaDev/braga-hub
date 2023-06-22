import { createContext } from "react";

export const TesteContext = createContext({});

export const GlobalProvider = ({ children }) => {
  return <TesteContext.Provider value={{}}>{children}</TesteContext.Provider>;
};
