import React, { createContext, useContext, useReducer } from "react";
import { quizReducer } from "./Reducers";

const QuizContext = createContext();
const AppContext = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    score: 0,
  });

  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export default AppContext;
