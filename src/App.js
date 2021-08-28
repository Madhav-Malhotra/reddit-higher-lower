import React, { useState } from "react";
import SinglePost from "./Components/SinglePost.js";
import DoublePost from "./Components/DoublePost.js";
import Intro from "./Components/Intro";

export default function App() {
  const [mode, setMode] = useState(null);

  return (
    <div className="intro-bg">
      <div className="intro-bg-overlay">
        <div className="container">
          {mode === "single" && <SinglePost />}
          {mode === "double" && <DoublePost />}
          {mode === null && <Intro setMode={setMode} />}
        </div>
      </div>
    </div>
  );
}
