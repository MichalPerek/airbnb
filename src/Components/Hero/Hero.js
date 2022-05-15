import React from "react";
import experiences from "./experiences.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-image" src={experiences} alt="" />
      <h1 className="hero-title">Online Experiences</h1>
      <div className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </div>
    </div>
  );
}
