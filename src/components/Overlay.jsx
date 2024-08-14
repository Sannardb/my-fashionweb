import React from "react";
import "../styles/Overlay.css";

function Overlay({ onClick }) {
  return <div className="overlay" onClick={onClick}></div>;
}

export default Overlay;
