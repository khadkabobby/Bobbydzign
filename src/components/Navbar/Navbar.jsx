import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Bobby<span className="red">DZign</span>
        </a>
        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonial</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={() => setIsActive(!isActive)}>
          {console.log(isActive)}
          <img src={menuIcon} alt="menu" />
        </div>
      </nav>
      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setIsActive(!isActive)}>
          <img src={closeIcon} alt="close" />
        </div>
        <ul className="menu-items">
          <li onClick={() => setIsActive(!isActive)}>
            <a href="#topics">Course Details</a>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <a href="#info">About</a>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <a href="#blog">Blog</a>
          </li>
          <li onClick={() => setIsActive(!isActive)}>
            <a href="#testimonials">Testimonial</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
