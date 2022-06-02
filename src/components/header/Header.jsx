import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="container mx-auto flex justify-between items-center p-2">
      <h1 className="text-slate-900 text-3xl">
        Math<span className="text-orange-600">whiz</span>
      </h1>
      <h1>
        {theme ? (
          <FaSun
            className="cursor-pointer text-white text-3xl"
            onClick={() => setTheme(!theme)}
          />
        ) : (
          <FaMoon
            className="cursor-pointer text-slate-900 text-3xl"
            onClick={() => setTheme(!theme)}
          />
        )}
      </h1>
    </header>
  );
};

export default Header;
