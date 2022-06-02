import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <h1 className="text-black dark:text-white">
        Math<span>whiz</span>
      </h1>
      <h1>
        {theme ? (
          <FaSun className="cursor-pointer" onClick={() => setTheme(!theme)} />
        ) : (
          <FaMoon className="cursor-pointer" onClick={() => setTheme(!theme)} />
        )}
      </h1>
    </header>
  );
};

export default Header;
