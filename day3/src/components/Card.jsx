import React from "react";
import HomeScreen from "../screens/HomeScreen";

const Card = (props) => {
  const { name, email, phoneNumber, children, color } = props;
  return (
    <div>
      Name: {name}, Email: {email}, Tel: {phoneNumber},
      <div style={{ backgroundColor: color, border: "1px solid" }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
