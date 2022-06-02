import { useState } from "react";
import { Header } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`App ${theme ? "dark" : ""}`}>
      <div className="main dark:bg-black">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
