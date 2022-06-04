import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Menu = () => {
  const { questions } = useGlobalContext();

  const navigate = useNavigate();

  const onStart = () => {
    if (questions) {
      navigate("/quiz");
    } else {
      alert("Please select a question");
    }
  };

  return (
    <div className="menu container mx-auto flex flex-col justify-center items-center h-4/5 gap-3">
      <h1 className="text-5xl text-orange-600 font-semibold">MATH QUIZ</h1>
      <p className="text-slate-900 dark:text-white">
        Ready to prove that you are a mathlete?
      </p>
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
