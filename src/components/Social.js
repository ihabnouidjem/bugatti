import React from "react";
import "../styles/social.css";
import {
  FaTwitterSquare,
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Social() {
  return (
    <div className="social element-margin">
      <h1 className="social-header">SOCIAL</h1>
      <div className="social-grid">
        <div className="social-box grid-1">
          <i className="social-icon">
            <FaTwitterSquare />
          </i>
          <img
            loading="lazy"
            src={
              "https://www.tuningblog.eu/wp-content/uploads/2020/02/2020-Bugatti-Chiron-Sport-Edition-Noire-Sportive-Tuning-2.jpg"
            }
          />
          <p className="social-txt">twitter</p>
        </div>
        <div className="social-box grid-2">
          <i className="social-icon">
            <FaYoutube />
          </i>
          <img
            loading="lazy"
            src={"https://www.netcarshow.com/Bugatti-Divo-2019-1600-03.jpg"}
          />
          <p className="social-txt">youtube</p>
        </div>
        <div className="social-box grid-3">
          <i className="social-icon">
            <FaFacebookSquare />
          </i>
          <img
            loading="lazy"
            src={
              "https://imageio.forbes.com/specials-images/imageserve/62a868172e67b611f566c366/Bugatti-Chiron-Super-Sport/960x0.jpg?format=jpg&width=960"
            }
          />
          <p className="social-txt">facebook</p>
        </div>
        <div className="social-box grid-4">
          <i className="social-icon">
            <FaInstagramSquare />
          </i>
          <img
            loading="lazy"
            src={
              "https://www.bugatti.com/fileadmin/_processed_/sei/p581/se-image-c90c599f8a59cdc39317cef56ca693cb.jpg"
            }
          />
          <p className="social-txt">instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Social;
