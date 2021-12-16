import React from "react";
import footerLogo from "../images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer-logo" src={footerLogo} alt="Home." />
        <div className="footer-links">
          <div className="footer-links-pair1">
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-links-pair2">
            <p>Privacy Policy</p>
            <p>Press Kit</p>
          </div>
          <div className="footer-link">
            <p>Install Guide</p>
          </div>
        </div>
        <div className="footer-icons">
          <div className="footer-icon fb"></div>
          <div className="footer-icon twitter"></div>
          <div className="footer-icon instagram"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
