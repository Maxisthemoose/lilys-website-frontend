import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";
import backArrow from "../images/backArrow.svg";

function BackButton(props) {
  const navigate = useNavigate();
  return (
    <div className="back-button">
      <img src={backArrow} onClick={() => navigate(-1)} draggable="false" />
    </div>
  )

}

export default BackButton;