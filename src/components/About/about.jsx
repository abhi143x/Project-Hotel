import React from "react";
import "./about.css";

import aboutImg from "./../../assets/about-one.png";

const About = () => {
  return (
    <div className="section wrapper">
      <div className="about_img">
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className="about_content">
        <small className="section_Heading">The Royal Hotel</small>
        <h2 className="section_Title">
          Where Elegance Meets <span>Excellance</span>{" "}
        </h2>
        <p>
          Our hotels each have their own stories, traditions and character that
          mark them out as unique. This individuality brings our collection
          together.
        </p>

        <div className="cards">
          <p>
            260+ <span>Awards Wins</span>
          </p>
          <p>
            200k+ <span>Visitors Visits</span>
          </p>
          <p>
            150k <span>Events</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
