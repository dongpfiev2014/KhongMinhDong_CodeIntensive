import React, { useState } from "react";
import ThemeContext from "../../context/context";
import HeaderComponent from "../../components/ComponentTree-Context/HeaderComponent";
import ComponentA from "../../components/ComponentTree-Context/ComponentA";

const Lecture9Context = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <HeaderComponent />
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  );
};

export default Lecture9Context;
