import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ questions, setScore }) => {
  const [num, setNum] = useState(0);
  const [choice, setChoice] = useState("");
  const [count, setCount] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      count > -1 &&
      setInterval(() => {
        setCount(count - 1);
      }, 1000);
    if (count === -1) {
      navigate("/end-game");
    }

    return () => clearInterval(timer);
  }, [count, navigate]);

  useEffect(() => {
    if (choice === questions[num].answer) {
      setScore((prev) => {
        return prev + 1;
      });
    }
  }, [choice, setScore, num, questions]);

  return (
    <div className="quiz container mx-auto grid place-items-center h-4/5 text-slate-900 ">
      <div className="bg-gray-200 rounded-lg shadow-xl w-3/4 p-4">
        <h1 className="text-center bg-orange-600 text-white py-2 rounded-lg">
          {questions[num].prompt}
        </h1>
        {/* The questions options starts */}
        <div className="options grid grid-cols-2 gap-3 mt-8">
          <button
            className="bg-white text-xl rounded shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => setChoice(questions[num].optionA)}
          >
            {questions[num].optionA}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => setChoice(questions[num].optionB)}
          >
            {questions[num].optionB}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => setChoice(questions[num].optionC)}
          >
            {questions[num].optionC}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => setChoice(questions[num].optionD)}
          >
            {questions[num].optionD}
          </button>
        </div>
        {/* The questions option ends */}
        <div className="mt-6 flex flex-row justify-between items-center">
          <div className="timer text-2xl pl-6">{count}</div>
          {num === 4 ? (
            <button onClick={() => navigate("/end-game")}>Submit</button>
          ) : (
            <button onClick={() => setNum(num + 1)} className="">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
