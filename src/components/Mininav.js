import React, { useState, useEffect } from "react";
import "../styles/mininav.css";
import {
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
  BsX,
} from "react-icons/bs";

function Mininav({ fmodels, cardIndex, setCurrentCard }) {
  const [mininavStatus, setMininavStatus] = useState(false);
  const handlenavstatus = () => setMininavStatus(!mininavStatus);
  const goup = () => {
    if (cardIndex + 1 == fmodels.length) {
      setCurrentCard(fmodels[0]);
    } else {
      setCurrentCard(fmodels[cardIndex + 1]);
    }
  };
  const godown = () => {
    if (cardIndex == 0) {
      setCurrentCard(fmodels[fmodels.length - 1]);
    } else {
      setCurrentCard(fmodels[cardIndex - 1]);
    }
  };
  // useEffect(() => {
  //   if (mininavStatus == true) {
  //     const interval = setInterval(() => {
  //       setMininavStatus(false);
  //     }, 8000);
  //     return () => clearInterval(interval);
  //   }
  // }, [mininavStatus]);
  //   };
  return (
    <div className="mininav">
      <div
        onClick={godown}
        className={mininavStatus ? "mininav-icon" : "hidden"}
      >
        <BsChevronLeft />
      </div>

      <div onClick={goup} className={mininavStatus ? "mininav-icon" : "hidden"}>
        <BsChevronRight />
      </div>
      <div
        onClick={handlenavstatus}
        className={!mininavStatus ? "mininav-icon" : "hidden"}
      >
        <BsChevronUp />
      </div>

      <div
        onClick={handlenavstatus}
        className={mininavStatus ? "mininav-icon" : "hidden"}
      >
        <BsX />
      </div>
    </div>
  );
}

export default Mininav;
