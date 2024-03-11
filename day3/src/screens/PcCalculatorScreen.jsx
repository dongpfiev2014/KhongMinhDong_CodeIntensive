import React, { useState } from "react";
import { ButtonComponent, Card } from "../components";

const PcCalculatorScreen = () => {
  const [Number, setNumber] = useState("");
  const handleSaveFormular = (key) => {
    setNumber(Number + key);
  };
  const handleCalc = () => {
    const ReplaceNumber = Number.replaceAll(":", "/");
    const ReplaceNumber2 = ReplaceNumber.replaceAll("x", "*");
    const result = eval(ReplaceNumber2);
    setNumber(result);
  };

  return (
    <div style={{ width: "50%", backgroundColor: "white" }}>
      <Card>
        <div
          style={{
            padding: "5px 5px",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            display: "flex",
            backgroundColor: "white",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          <h1 style={{ margin: 0 }}>{Number ? Number : "0"}</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "75%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            <ButtonComponent text={1} onClick={() => handleSaveFormular("1")} />
            <ButtonComponent text={2} onClick={() => handleSaveFormular("2")} />
            <ButtonComponent text={3} onClick={() => handleSaveFormular("3")} />
            <ButtonComponent text={4} onClick={() => handleSaveFormular("4")} />
            <ButtonComponent text={5} onClick={() => handleSaveFormular("5")} />
            <ButtonComponent text={6} onClick={() => handleSaveFormular("6")} />
            <ButtonComponent text={7} onClick={() => handleSaveFormular("7")} />
            <ButtonComponent text={8} onClick={() => handleSaveFormular("8")} />
            <ButtonComponent text={9} onClick={() => handleSaveFormular("9")} />
            <ButtonComponent text={0} onClick={() => handleSaveFormular("0")} />
            <ButtonComponent text={"AC"} onClick={() => setNumber("")} />
            <ButtonComponent
              color={"rgb(58, 101, 194)"}
              text={"="}
              onClick={handleCalc}
            />
          </div>
          <div
            style={{
              maxWidth: "25%",
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: 10,
            }}
          >
            <ButtonComponent
              text={":"}
              onClick={() => handleSaveFormular(" : ")}
            />
            <ButtonComponent
              text={"x"}
              onClick={() => handleSaveFormular(" x ")}
            />
            <ButtonComponent
              text={"-"}
              onClick={() => handleSaveFormular(" - ")}
            />
            <ButtonComponent
              text={"+"}
              onClick={() => handleSaveFormular(" + ")}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PcCalculatorScreen;
