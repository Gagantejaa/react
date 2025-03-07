import React, { useState } from "react";
import "./GreetingForm.css";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="greeting-container">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Greet</button>
      </form>
      {greeting && <h3>{greeting}</h3>}
    </div>
  );
};

export default GreetingForm;
