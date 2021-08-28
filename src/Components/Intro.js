import React from "react";

export default function Intro(props) {
  return (
    <div className="intro-text">
      <h1 className="intro-title">
        <span className="text-success">Higher</span> or{" "}
        <span className="text-danger">lower?</span>
      </h1>
      <h3 className="intro-subtitle mb-3">Reddit Edition</h3>
      <button
        className="intro-button mr-3"
        onClick={() => props.setMode("single")}
      >
        Single Post Mode
      </button>
      <button
        className="intro-button ml-3"
        onClick={() => props.setMode("double")}
      >
        Multipost Mode
      </button>
    </div>
  );
}
