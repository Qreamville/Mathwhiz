import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu, Quiz, EndQuiz, Footer } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setPercentage((prev) => {
      if (questions) {
        prev = (score / questions.length) * 100;
      }
      return prev;
    });
  }, [questions, score]);

  return (
    <BrowserRouter>
      <div className={`App ${theme ? "dark" : "light"}`}>
        <div className="main dark:bg-slate-900 relative">
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route
              path="/Mathwhiz"
              element={
                <Menu questions={questions} setQuestions={setQuestions} />
              }
            />
            <Route
              path="/quiz"
              element={<Quiz questions={questions} setScore={setScore} />}
            />
            <Route
              path="/end-game"
              element={
                <EndQuiz
                  percentage={percentage}
                  score={score}
                  questions={questions}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
