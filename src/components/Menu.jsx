import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import data from "../assets/data.json";

const Menu = () => {
  const { questions, setQuestions, count, setCount } = useGlobalContext();
  const navigate = useNavigate();

  const onStart = () => {
    if (questions) {
      navigate("/quiz");
    } else {
      alert("Please select a question type");
    }
  };

  return (
    <div className="menu container mx-auto flex flex-col justify-center items-center h-4/5 gap-3">
      <h1 className="text-5xl text-orange-600 font-semibold">MATH QUIZ</h1>
      <p className="text-slate-900 dark:text-white">
        Ready to prove that you are a mathlete?
      </p>
      <select
        name="type"
        defaultValue={"default"}
        className="text-slate-900 p-2"
      >
        <option value="default" disabled>
          Select math type
        </option>
        <option value="addition" onClick={() => setQuestions(data.addition)}>
          Addition
        </option>
        <option
          value="subtraction"
          onClick={() => setQuestions(data.subtraction)}
        >
          Subtraction
        </option>
        <option
          value="multiplication"
          onClick={() => setQuestions(data.multiplication)}
        >
          Multiplication
        </option>
        <option value="division" onClick={() => setQuestions(data.division)}>
          Division
        </option>
      </select>
      <div className="text-slate-900 dark:text-white mt-3">
        <button
          className="border-orange-600 border px-4 py-2 hover:bg-orange-600 hover:text-white"
          onClick={onStart}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Menu;
