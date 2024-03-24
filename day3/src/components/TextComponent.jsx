import React from "react";

const TextComponent = (props) => {
  const { text, fontSize, fontWeight, color, margin } = props;
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        backgroundColor: "transparent",
        margin: margin,
      }}
    >
      {text}
    </div>
  );
};

export default TextComponent;
