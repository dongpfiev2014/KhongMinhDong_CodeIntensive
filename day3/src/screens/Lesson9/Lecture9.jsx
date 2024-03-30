import React, { useState } from "react";
import HeaderComponent from "../../components/ComponentTree/HeaderComponent";
import ComponentA from "../../components/ComponentTree/ComponentA";

const Lecture9 = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <HeaderComponent
        theme={theme}
        onChangeTheme={(val) => setTheme(val ? "light" : "dark")}
      />
      <ComponentA theme={theme} />
    </div>
  );
};

export default Lecture9;
