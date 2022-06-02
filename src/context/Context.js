import React, { createContext, useContext } from "react";

const QuizContext = createContext();
const AppContext = ({ children }) => {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export default AppContext;
