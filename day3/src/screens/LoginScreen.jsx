import React, { useState } from "react";
import "../styles/GlobalStyles.css";
import { globalStyles } from "../styles/GlobalStyles";

const LoginScreen = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={email}
        onChange={(val) => setemail(val.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={password}
        onChange={(val) => setpassword(val.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
