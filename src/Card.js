import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="Bodies">
      <p className="day">
        <span id="today">sunday</span>
        <br />
        <span id="description"> Light rain </span>
      </p>
      <div className="row weather-forecast" id="forecast"></div>
    </div>
  );
}
