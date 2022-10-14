import React, { useState, useEffect } from "react";
import "../styles/banner.css";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

function Banner({}) {
  const [bannermodels, setBannerModels] = useState([
    {
      src: "https://www.auto-data.net/images/f107/Bugatti-Bolide.jpg",
    },
    {
      src: "https://wallpaperaccess.com/full/4185350.jpg",
    },
    {
      src: "https://billionairetoys.com/wp-content/uploads/bugatti-divo-left-side-profile.jpg",
    },
    {
      src: "https://www.tuningblog.eu/wp-content/uploads/2020/02/2020-Bugatti-Chiron-Sport-Edition-Noire-Sportive-Tuning-2.jpg",
    },
  ]);
  const [currmodel, setCurrModel] = useState(bannermodels[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const index = bannermodels.indexOf(currmodel);
      if (index + 1 == bannermodels.length) {
        setCurrModel(bannermodels[0]);
      } else {
        setCurrModel(bannermodels[bannermodels.indexOf(currmodel) + 1]);
      }
    }, 60000);
    return () => clearInterval(interval);
  });
  return (
    <div className="banner" id="banner">
      <div className="banner-image">
        <img loading="lazy" src={currmodel.src} />
      </div>
      <div className="banner-scroll">
        <div className="banner-scroll-icon-container">
          <i className="banner-scroll-icon">
            <BsFillArrowDownSquareFill />
          </i>
        </div>

        <p className="banner-scroll-text">SCROLL</p>
      </div>
    </div>
  );
}

export default Banner;
