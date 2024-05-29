import React, { useEffect } from "react";
import "./About.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllAbout } from "../../Redux/About/aboutAction";
const About = () => {
  const dispatch = useDispatch();
  const { about } = useSelector((state) => state.about);
  useEffect(() => {
    dispatch(getAllAbout());
  }, [dispatch]);
  return (
    <div className="about layout">
      <div className="row">
        <div className="col-2">
          <div className="profile-img">
            {about && about[0] && (
              <img src={`${about[0].photo}`} alt="profile-pic" />
            )}
          </div>
        </div>
        <div className="col-2">
          <h2 className="heading--about">ABOUT ME</h2>
          {about &&
            about[0] &&
            about[0]?.aboutMe?.map((para, i) => <p key={i}>{para}</p>)}
          <a href=" /assets/Amaan_Ansari_2024.pdf" download className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
