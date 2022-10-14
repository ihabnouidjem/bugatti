import React from "react";
import "../styles/quote.css";

function Quote() {
  return (
    <div className="quote element-margin">
      <p className="quote-txt">
        <span className="quote-first-part">"Nothing is too beautiful, </span>
        <span className="quote-seconde-part"> Nothing is too expensive"</span>
      </p>
      <p className="quote-author">Ettore Bugatti</p>
    </div>
  );
}

export default Quote;
