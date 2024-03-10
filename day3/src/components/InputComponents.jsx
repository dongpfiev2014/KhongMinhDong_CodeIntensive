import React from "react";

const InputComponents = (props) => {
  const { prefix, onChange } = props;
  return (
    <div className="input">
      {prefix}
      <input
        onChange={(val) => onChange(val.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Content"
      />
    </div>
  );
};

export default InputComponents;
