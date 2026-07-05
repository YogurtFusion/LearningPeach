import React from "react";
import headerImg from "../assets/images/chef-claude-icon.png";

const Navbar = () => {
  return (
    <header>
      <div className="">
        <img src={headerImg} alt="header image" />
      </div>
      <h1>Chef Claude</h1>
    </header>
  );
};
export default Navbar;
