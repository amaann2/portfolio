import React from "react";
import Typed from "react-typed";
import "./HomeHero.css";
const HomeHero = () => {
  return (
    <div className="home">
      <div className="home-hero__content">
        <h2 className="heading-primary" data-aos="fade-up">
          hey, I'm <br />
          <span>
            <Typed
              strings={["Amaan", "अमान", "أمان"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </h2>
        <div className="home-hero__info">
          <p className="text-primary" data-aos="fade-up">
            A Focused Full Stack Web Developer building the Frontend and Backend
            of Websites and Web Applications that leads to the success of the
            overall product
          </p>
        </div>
      </div>
      <div className="home__border">
        <hr />
      </div>
      <div className="mouse__scroll">
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default HomeHero;
