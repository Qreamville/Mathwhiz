import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();
const AppContext = ({ children }) => {
  const [questions, setQuestions] = useState(null);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export default AppContext;
