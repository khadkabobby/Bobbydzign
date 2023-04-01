import React from "react";
import "./Footer.css";
import { instagramLogo, twitterLogo, facebookLogo } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="black" id="footer">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Bobby <span className="red">DZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="facebook" />
              </a>
            </div>
            <div className="copyright">
              The website is developed by Bobby Khadka &#169; 2023
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">khadkabobby916@gmail.com</a>
              </li>
              <li>
                <a href="#">+977 9869482916</a>
              </li>
            </ul>
            <div className="copyright mobile">
              The website is developed by Bobby Khadka &#169; 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
