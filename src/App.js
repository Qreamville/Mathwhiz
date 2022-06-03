import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu, Quiz, EndQuiz } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <BrowserRouter>
      <div className={`App ${theme ? "dark" : "light"}`}>
        <div className="main dark:bg-slate-900">
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/end__game" element={<EndQuiz />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
