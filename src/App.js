import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Menu, Quiz } from "./components";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
