import React, { useEffect } from "react";
import Typed from "react-typed";
import "./HomeHero.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllAbout } from "../../Redux/About/aboutAction";

const HomeHero = () => {
  const dispatch = useDispatch();
  const { about } = useSelector((state) => state.about);
  useEffect(() => {
    dispatch(getAllAbout());
  }, [dispatch]);
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
          {about && about[0] && (
            <p className="text-primary" data-aos="fade-up">
              {about[0].summary}
            </p>
          )}
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
