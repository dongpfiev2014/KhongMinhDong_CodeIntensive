import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const SettingsScreen = () => {
  const [time, setTime] = useState(100);

  const navigate = useNavigate();

  useEffect(() => {
    if (time >= 0) {
      const timeout = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [time]);

  useEffect(() => {
    time === -1 && navigate("/");
  }, [time]);

  return (
    <div>
      <hr />
      <br />
      <h2>Settings</h2>
      <br />
      <br />
      <Link to={"/profile"}>Profile</Link>
      <br />
      <br />
      <br />
      <div>Come back to my Homepage: {time} seconds</div>
      <br />
      <hr />
      <br />
      <button onClick={() => navigate("/products")}>Products</button>
      <br />
      <br />
      <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default SettingsScreen;
