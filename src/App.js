import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu, Quiz, EndQuiz, Footer } from "./components";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <BrowserRouter>
      <div className={`App ${theme ? "dark" : "light"}`}>
        <div className="main dark:bg-slate-900 relative">
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/Mathwhiz" element={<Menu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/end-game" element={<EndQuiz />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
