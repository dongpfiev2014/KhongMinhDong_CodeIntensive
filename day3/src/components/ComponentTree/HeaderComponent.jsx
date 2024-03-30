import React from "react";

const HeaderComponent = ({ theme, onChangeTheme }) => {
  return (
    <div
      style={{
        color: theme === "light" ? "grey" : "white",
      }}
    >
      <p>Theme: {theme}</p>
      <button onClick={() => onChangeTheme(true)}>Light</button>
      <button onClick={() => onChangeTheme(false)}>Dark</button>
    </div>
  );
};

export default HeaderComponent;
