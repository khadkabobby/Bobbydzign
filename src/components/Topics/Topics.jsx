import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  return (
    <section className="black" id="topics">
      <div className="wrapper">
        <h2>What will you learn</h2>
        <div className="content-container">
          <ul>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="image" />
          </div>
        </div>
        <img src={bgElement1} alt="bgElement" className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
