import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import "../styles/contact.css";
import { IoCopyOutline, IoCopy, IoCheckmarkOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Contact() {
  const [copyEmail, setCopyEmail] = useState(false);
  const [copyMobile, setCopyMobile] = useState(false);
  const handleCopyEmail = () => {
    setCopyEmail(!copyEmail);
    navigator.clipboard.writeText("bugatti@bugatti.com");
  };
  const handleCopyMobile = () => {
    setCopyMobile(!copyMobile);
    navigator.clipboard.writeText("0444444444");
  };
  useEffect(() => {
    if (copyEmail) {
      const interval = setInterval(() => {
        setCopyEmail(false);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [copyEmail]);
  useEffect(() => {
    if (copyMobile) {
      const interval = setInterval(() => {
        setCopyMobile(false);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [copyMobile]);
  return (
    <div>
      <Header page={"Contact"} />
      <div className="contact-component">
        <h1 className="contact-component-header">CONTACT</h1>
        <div className="contact-container">
          {" "}
          <form className="contact-form">
            <input
              placeholder="username"
              className="contact-form-username"
              type="text"
            />
            <input
              placeholder="e-mail"
              className="contact-form-e-mail"
              type="text"
            />
            <input
              placeholder="subject"
              className="contact-form-subject"
              type="text"
            />
            <textarea
              placeholder="message"
              className="contact-from-message"
            ></textarea>
            <button className="contact-from-btn">Submit</button>
          </form>
          <div className="contact-info">
            <h3 className="contact-info-header">e-mail</h3>
            <div className="contact-info-container">
              <p className="contact-info-txt">bugatti@bugatti.com</p>
              <i onClick={handleCopyEmail} className="contact-info-icon">
                {copyEmail ? <IoCheckmarkOutline /> : <IoCopyOutline />}
              </i>
            </div>
            <h3 className="contact-info-header">mobile</h3>
            <div className="contact-info-container">
              <p className="contact-info-txt">+444 44 4444 44</p>
              <i onClick={handleCopyMobile} className="contact-info-icon">
                {copyMobile ? <IoCheckmarkOutline /> : <IoCopyOutline />}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
