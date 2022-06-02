import { useState } from "react";
import { Header } from "./components";
import data from "./assets/data.json";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`App${theme ? "dark" : ""}`}>
      <div className="main dark:bg-slate-900">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
