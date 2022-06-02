import { useState } from "react";
import { Header } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="App" id={`${theme ? "dark" : "light"}`}>
      <div className="main">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
