import React, { useState } from "react";
import { ButtonComponent } from "../components";

const CalculatorScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>{count}</h1>
      <ButtonComponent
        text="+"
        borderRadius="12px"
        onClick={() => setCount(count + 1)}
      />
      <ButtonComponent
        text="-"
        borderRadius="12px"
        onClick={() => setCount(count - 1)}
      />
    </div>
  );
};

export default CalculatorScreen;
