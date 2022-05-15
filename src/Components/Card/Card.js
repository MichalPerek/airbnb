import React from "react";
import "./Card.css";
import star from "./Images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img className="card-image" src={`../images/${props.img}`} alt="" />
      <div className="card-stats">
        <img className="card-stats_image" src={star} alt="" />
        <span> {props.rating} </span>
        <span className="gray"> ({props.reviewCount}) </span>
        <span className="gray"> {props.location} </span>
      </div>
      <div className="card-description">
        <div>{props.title}</div>
        <span className="bold">From ${props.price}</span>
        <span>/ person</span>
      </div>
    </div>
  );
}
