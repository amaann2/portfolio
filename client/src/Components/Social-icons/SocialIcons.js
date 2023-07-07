import React from "react";
import "./SocialIcons.css";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
const SocialIcons = () => {
    return <div className="social-icons">
        <a href="https://www.linkedin.com/in/amaan-ansarii/" rel="noreferrer" title="Linkedin" target="_blank"><AiOutlineLinkedin className="social-icon" /></a>
        <a href="https://github.com/amaann2" rel="noreferrer" title="Github" target="_blank"><AiOutlineGithub className="social-icon" /></a>
        <a href="https://github.com/amaann2" rel="noreferrer" title="Mail" target="_blank"><AiOutlineMail className="social-icon" /></a>
        <a href="https://github.com/amaann2" rel="noreferrer" title="Instagram" target="_blank"><AiOutlineInstagram className="social-icon" /></a>
    </div>;
};

export default SocialIcons;
