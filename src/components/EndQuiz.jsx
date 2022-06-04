import React from "react";
import { useNavigate } from "react-router-dom";

const EndQuiz = ({ percentage, score, questions, setScore, setQuestions }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/Mathwhiz");
    setScore(0);
    setQuestions(null);
  };

  return (
    <div className="end_quiz container mx-auto grid place-items-center h-4/5 text-slate-900 dark:text-white">
      {questions ? (
        <div className="text-center dark:text-white">
          <p>You scored</p>
          <h1 className="text-9xl text-orange-600">{percentage}%</h1>
          <p>
            or You got {score} out of {questions.length}
          </p>
          <button
            className="border border-orange-600 px-4 py-2 mt-6 hover:bg-orange-600 hover:text-white"
            onClick={onClick}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="text-center dark:text-white">
          <p>Please, go back and retake the test</p>
          <button
            className="border border-orange-600 px-4 py-2 mt-6 hover:bg-orange-600 hover:text-white"
            onClick={onClick}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default EndQuiz;
