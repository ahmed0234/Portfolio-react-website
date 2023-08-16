import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__content container">
        <div className="main__title">Know Me More</div>

        <div className="about__section-1">
          <h1>
            I'm <strong>Ahmed Hassan</strong>, a Web Developer
          </h1>
          <p className="description__1">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="description__2">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>

        <div className="about__section-2">
          <h4 className="about__section-2-title">
            Name: 
            <span className="about__section-2-subtitle"> Ahmed Hassan</span>
          </h4>
          <hr />
          <h4 className="about__section-2-title">
            Email:{" "}
            <span className="about__section-2-subtitle">
              <a
                href="mailto:ahmedkiller0234@gmail.com"
                className="about__section-2-link"
              >
                ahmedkiller0234@gmail.com
              </a>
            </span>
          </h4>
          <hr />
          <h4 className="about__section-2-title">
            Age: <span className="about__section-2-subtitle">17</span>
          </h4>
          <hr />
          <h4 className="about__section-2-title">
            From:{" "}
            <span className="about__section-2-subtitle">
              Islamabad , Rawalpindi Pakistan
            </span>
          </h4>
          <div className="button">
            <button type="button btn" className="btn-0">
              Download CV
            </button>
          </div>
        </div>

        <div className="about__section-3">
              <div className="about__section-3-content about__section-3-content-1">
                    <h3>10+</h3>
                    <h4>Years Experience</h4>
              </div>
              <div className="about__section-3-content about__section-3-content-2">
                    <h3>250+</h3>
                    <h4>Happy Clients</h4>
              </div>
              <div className="about__section-3-content about__section-3-content-3">
                    <h3>650+</h3>
                    <h4>Projects Done</h4>
              </div>
              <div className="about__section-3-content about__section-3-content-4">
                    <h3>38+</h3>
                    <h4>Get Awards</h4>
              </div>
        </div>

      </div>
    </div>
  );
};

export default About;
