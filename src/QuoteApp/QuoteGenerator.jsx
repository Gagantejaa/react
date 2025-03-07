import React, { useState } from "react";
import "./QuoteGenerator.css";

const quotes = [
  "The best way to predict the future is to create it.",
  "Believe you can and you're halfway there.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You miss 100% of the shots you don’t take."
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h2>Random Quote Generator</h2>
      <p className="quote">{quote || "Click below to get a quote!"}</p>
      <button onClick={generateQuote}>Get Quote</button>
    </div>
  );
};

export default QuoteGenerator;
