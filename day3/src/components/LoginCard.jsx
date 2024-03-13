import React from "react";

const LoginCard = (props) => {
  const { display, type, placeholder, onChange, value, children } = props;
  return (
    <div>
      <div>
        <input
          type={type}
          name=""
          id=""
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ display: display }}
        />
      </div>
    </div>
  );
};

export default LoginCard;
