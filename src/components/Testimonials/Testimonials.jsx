import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets/index";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="testimonial1" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great Course. I got to learn a lot.
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial2} alt="testimonial2" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Meta</div>
              <div className="review">
                I got to learn a lot about Music Production with this course.
                Thanks :&#41;
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial3} alt="testimonial1" />
            <div className="reviewer-details">
              <div className="name">Rabi Khadka</div>
              <div className="company-name">Amozon</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
