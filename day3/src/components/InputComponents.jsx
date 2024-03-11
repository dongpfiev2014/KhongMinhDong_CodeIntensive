import React from "react";

const InputComponents = (props) => {
  const { prefix, onChange, type } = props;
  return (
    <div className="input">
      {prefix}
      <input
        onChange={(val) => onChange(val.target.value)}
        type={type}
        name=""
        id=""
        placeholder="Content"
      />
    </div>
  );
};

export default InputComponents;
