import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import HomeHero from "../../Components/home-hero/HomeHero";
import Education from "../../Components/Education/Education";
import Skill from "../../Components/Skills/Skill";
import Project from "../../Components/Projects/Project";
const Home = ({ about, project }) => {
  return (
    <>
      <div className="container">
        <section>
          <HomeHero />
        </section>
        <section ref={about}>
          {" "}
          <About />
        </section>
        <Education />
        <Skill />
        <section ref={project}>
          <Project />
        </section>
      </div>
    </>
  );
};

export default Home;
