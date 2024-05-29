import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      Developed By Amaan Ansari <Link to={"/login"}> </Link>
    </div>
  );
};

export default Footer;
