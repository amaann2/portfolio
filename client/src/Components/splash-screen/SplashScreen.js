import React from "react";
import "./SplashScreen.css";
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 95,35 80,95 20,95 5,35"
          fill="url(#logo-pattern)"
        />
        <text x="50" y="60" textAnchor="middle" fontSize="48" fill="#64ffda">
          A
        </text>
      </svg>
    </div>
  );
};

export default SplashScreen;
