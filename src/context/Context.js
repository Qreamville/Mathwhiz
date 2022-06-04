import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "../assets/data";

const QuizContext = createContext();
const AppContext = ({ children }) => {
  const [questions, setQuestions] = useState(data);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((prev) => {
      if (questions) {
        prev = (score / questions.length) * 100;
      }
      return prev;
    });
  }, [questions, score]);

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, setScore, score, percentage }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};

export default AppContext;
