import React from "react";
import HomeScreen from "../screens/HomeScreen";

const Card = (props) => {
  const { gap, display, name, email, phoneNumber, children, color } = props;
  return (
    <div
      className="shadow"
      style={{
        backgroundColor: color ?? "rgb(220, 231, 227)",
        border: "1px solid #f3eeee",
        borderRadius: "20px",
        padding: 12,
        marginBottom: 12,
        minHeight: 200,
        width: "50%",
        display: display,
        gap: gap,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
