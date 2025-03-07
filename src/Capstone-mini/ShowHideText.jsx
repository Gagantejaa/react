import React, { useState } from "react";
import "./ShowHide.css";

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <h2>Show / Hide Text</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is the text that appears when you click the button!</p>}
    </div>
  );
};

export default ShowHideText;
