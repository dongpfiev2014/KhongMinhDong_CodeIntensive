import React, { useContext } from "react";
import ThemeContext from "../../context/context";

const HeaderComponent = () => {
  const themeCtx = useContext(ThemeContext);
  const { theme, setTheme } = themeCtx;
  return (
    <div
      style={{
        color: theme === "light" ? "grey" : "white",
      }}
    >
      <p>Theme: {theme} </p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("sida")}>Dark</button>
    </div>
  );
};

export default HeaderComponent;
