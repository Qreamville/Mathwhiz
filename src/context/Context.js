import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();
const AppContext = ({ children }) => {
  const [questions, setQuestions] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, score, setQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export default AppContext;
