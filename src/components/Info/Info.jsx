import React from "react";
import "./Info.css";

import { studentIcon, videoIcon, bgElement2 } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="studenticon" />
            <div className="amount">23000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt="studenticon" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img className="bg-element-2" src={bgElement2} alt="bgelement2" />
      </div>
    </section>
  );
};

export default Info;
