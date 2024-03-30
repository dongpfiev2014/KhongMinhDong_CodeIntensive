import React from "react";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  return (
    <div>
      <hr />
      <div>
        <br />
        <h2>My Profile</h2>
        <br />
        <br />
        <Link to={"/"}>HomePage</Link>
        <br />
        <br />
        <br />
      </div>
      <hr />
    </div>
  );
};

export default ProfileScreen;
