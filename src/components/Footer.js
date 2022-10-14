import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import { BsChevronBarUp } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer element-margin">
      <div className="footer-container">
        <NavLink to={"/services"}>
          <p className="footer-txt  footer-services">SERVICES</p>
        </NavLink>
        <NavLink to={"/media"}>
          <p className="footer-txt footer-media">MEDIA</p>
        </NavLink>
        <NavLink to={"/models"}>
          <p className="footer-txt footer-models">MODELS</p>
        </NavLink>
        <NavLink to={"/cookies"}>
          <p className="footer-txt footer-cookies">COOKIES</p>
        </NavLink>
        <NavLink to={"/contact"}>
          <p className="footer-txt footer-contact">CONTACT</p>
        </NavLink>
        <NavLink to={"/news"}>
          <p className="footer-txt footer-news">NEWS</p>
        </NavLink>
        <NavLink to={"/history"}>
          <p className="footer-txt footer-history">HISTORY</p>
        </NavLink>
        <NavLink to={"/events"}>
          <p className="footer-txt footer-events">EVENTS</p>
        </NavLink>
      </div>
      <button className="footer-btn">
        <a className="footer-icon" href="#banner">
          <BsChevronBarUp />
        </a>
      </button>
    </div>
  );
}

export default Footer;
