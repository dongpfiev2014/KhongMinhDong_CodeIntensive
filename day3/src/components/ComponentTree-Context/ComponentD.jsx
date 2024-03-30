import React, { useContext } from "react";
import ThemeContext from "../../context/context";

const ComponentD = () => {
  const themeCtx = useContext(ThemeContext);
  const { theme, setTheme } = themeCtx;
  return (
    <div>
      <h1 style={{ color: theme === "light" ? "gray" : "white" }}>
        Hello World
      </h1>
    </div>
  );
};

export default ComponentD;
