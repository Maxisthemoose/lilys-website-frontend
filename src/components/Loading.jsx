import React from "react";
import "./Loading.css";

function Loading(props) {

  return (
    <div className="spinner-container">
      <h1>Loading...</h1>
      <div className="spinner-object" />
    </div>
  )
}

export default Loading;