import React from "react";

const ComponentD = ({ theme }) => {
  return (
    <div>
      <h1 style={{ color: theme === "light" ? "gray" : "white" }}>
        Hello World
      </h1>
    </div>
  );
};

export default ComponentD;
