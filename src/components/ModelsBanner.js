import React from "react";
import "../styles/models-banner.css";

function ModelsBanner({ imgsrc }) {
  return (
    <div className="models-banner">
      <img loading="lazy" alt={"img"} src={imgsrc} />
    </div>
  );
}

export default ModelsBanner;
