import { Card, Input, Button } from "antd";
import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    const api = ``;
    const data = { email, password };
    setIsLoading(true);
    try {
      const res = await axios({
        method: "post",
        data,
        url: api,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="col-8 offset-2">
          <Card>
            <h2>Login</h2>
            <Input
              value={email}
              placeholder="email"
              onChange={(val) => setEmail(val.target.value)}
            />
            <div className="mt-4"></div>
            <Input.Password
              value={password}
              placeholder="password"
              onChange={(val) => setPassword(val.target.value)}
            />
            <Button
              disabled={!email || !password}
              size="large"
              className="mt-4 w-100"
              type="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
