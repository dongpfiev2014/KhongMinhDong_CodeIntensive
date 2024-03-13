import React, { useState } from "react";
import Card from "../components/Card";
import LoginCard from "../components/LoginCard";
const UsernamePassword = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [CorrectPassword, setCorrectPassword] = useState();
  const [IsCorrectPassword, setIsCorrectPassword] = useState(false);

  const handleCreate = () => {
    console.log(Username, Password, ConfirmPass);
    if (Username) {
      if (Password.length < 2) {
        alert("Mật khẩu quá ngắn");
        return;
      }
      if (Password !== ConfirmPass) {
        alert("Mật khẩu không giống nhau");
        return;
      }
      alert("Tạo tài khoản thành công");
      const data = {
        Username,
        Password,
      };
      setUsername("");
      setPassword("");
      setConfirmPass("");
      setCorrectPassword(data);
      setIsCorrectPassword(true);
    } else alert("Không được để trống");
  };
  const handleLogin = () => {
    if (Username && Username === CorrectPassword.Username) {
      if (Password.length < 2 || Password !== CorrectPassword.Password) {
        alert("Sai mật khẩu ");
        return;
      }
      alert("Đăng nhập thành công");
    } else alert("Đăng nhập không thành công vì tài khoản không tồn tại");
  };

  return (
    <div>
      <Card>
        <LoginCard
          placeholder="Username"
          value={Username}
          onChange={(val) => setUsername(val.target.value)}
        />
        <LoginCard
          placeholder="Password"
          value={Password}
          type="password"
          onChange={(val) => setPassword(val.target.value)}
        />
        <LoginCard
          placeholder="Confirm Password"
          display={IsCorrectPassword ? "none" : "block"}
          value={ConfirmPass}
          type="password"
          onChange={(val) => setConfirmPass(val.target.value)}
        />
        <button
          style={{ display: IsCorrectPassword ? "none" : "block" }}
          onClick={handleCreate}
        >
          Create
        </button>
        <button style={{ display: "block" }} onClick={handleLogin}>
          Login
        </button>
        <p>Not registered? Create an account</p>
      </Card>
    </div>
  );
};

export default UsernamePassword;
