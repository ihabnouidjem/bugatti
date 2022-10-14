import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import {
  IoHomeOutline,
  IoChatbubblesOutline,
  IoChatbubblesSharp,
} from "react-icons/io5";
import { IoLogoModelS } from "react-icons/io";
import { RiFilePaper2Line, RiFilePaper2Fill } from "react-icons/ri";
import { BsHouse, BsHouseFill } from "react-icons/bs";

function Header({ page }) {
  const [navStatus, setNavStatus] = useState(false);
  const handleNav = () => {
    setNavStatus(!navStatus);
  };
  return (
    <div className="header">
      <div className="header-content">
        <button className="header-btn" onClick={handleNav}>
          <TbMenu />
        </button>
        <NavLink className={"header-bugatti"} to="/">
          BUGATTI
        </NavLink>
        <button className="header-btn">
          <RiSearch2Line />
        </button>
      </div>
      <div
        className={
          navStatus ? "header-nav-container" : "header-nav-container-closed"
        }
      >
        <nav className={"header-nav"}>
          <NavLink className={"header-nav-item"} to="/">
            <i>{page == "Home" ? <BsHouseFill /> : <BsHouse />}</i>
            <p>home</p>
          </NavLink>
          <NavLink className={"header-nav-item"} to="/models">
            <i>
              <IoLogoModelS />
            </i>
            <p>models</p>
          </NavLink>
          <NavLink className={"header-nav-item"} to="/news">
            <i>
              {page == "News" ? <RiFilePaper2Fill /> : <RiFilePaper2Line />}
            </i>

            <p>news</p>
          </NavLink>
          <NavLink className={"header-nav-item"} to="/contact">
            <i>
              {page == "Contact" ? (
                <IoChatbubblesSharp />
              ) : (
                <IoChatbubblesOutline />
              )}
            </i>

            <p>contact</p>
          </NavLink>
        </nav>
        <div className="header-flag"></div>
      </div>
    </div>
  );
}

export default Header;
