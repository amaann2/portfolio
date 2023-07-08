import React, { useEffect } from "react";
import "./SocialIcons.css";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { getAllAbout } from "../../Redux/About/aboutAction";

const SocialIcons = () => {
  const dispatch = useDispatch();
  const { about } = useSelector((state) => state.about);
  useEffect(() => {
    dispatch(getAllAbout());
  }, [dispatch]);
  return (
    <div className="social-icons">
      {about && about[0] && (
        <>
          {about[0].github && (
            <a
              href={about[0].github}
              rel="noreferrer"
              title="Github"
              target="_blank"
            >
              <AiOutlineGithub className="social-icon" />
            </a>
          )}
          {about[0].linkedin && (
            <a
              href={about[0].linkedin}
              rel="noreferrer"
              title="Linkedin"
              target="_blank"
            >
              <AiOutlineLinkedin className="social-icon" />
            </a>
          )}
          {about[0].email && (
            <a
              href={`mailto:${about[0].email}`}
              rel="noreferrer"
              title="Mail"
              target="_blank"
            >
              <AiOutlineMail className="social-icon" />
            </a>
          )}
          {about[0].instagram && (
            <a
              href={about[0].instagram}
              rel="noreferrer"
              title="Instagram"
              target="_blank"
            >
              <AiOutlineInstagram className="social-icon" />
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default SocialIcons;
