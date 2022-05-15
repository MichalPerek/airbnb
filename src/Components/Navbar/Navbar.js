import React from "react";
import "./Navbar.css";
import airbnblogo from "./airbnblogo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={airbnblogo} alt="" />
    </div>
  );
}
