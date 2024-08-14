import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Fashion Webshop. All rights
            reserved.
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
