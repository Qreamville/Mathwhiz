import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";

const Quiz = () => {
  const { questions } = useGlobalContext();
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(25);
  const [choice, setChoice] = useState("");

  console.log(choice);

  return (
    <div className="quiz container mx-auto grid place-items-center h-4/5">
      <div className="bg-gray-200 rounded-lg shadow-xl w-3/4 p-4">
        <h1 className="text-center bg-orange-600 text-white py-2 rounded-lg">
          {questions[num].prompt}
        </h1>
        {/* The questions options starts */}
        <div className="options grid grid-cols-2 gap-3 mt-8">
          <button
            className="bg-white text-xl rounded shadow-md"
            onClick={() => setChoice(questions[num].optionA)}
          >
            {questions[num].optionA}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md"
            onClick={() => setChoice(questions[num].optionB)}
          >
            {questions[num].optionB}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md"
            onClick={() => setChoice(questions[num].optionC)}
          >
            {questions[num].optionC}
          </button>
          <button
            className="bg-white text-xl rounded shadow-md"
            onClick={() => setChoice(questions[num].optionD)}
          >
            {questions[num].optionD}
          </button>
        </div>
        {/* The questions option ends */}
        <div className="mt-6 flex flex-row justify-between items-center">
          <div className="timer text-2xl">{count}</div>
          {num === 4 ? (
            <button className="">Submit</button>
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
