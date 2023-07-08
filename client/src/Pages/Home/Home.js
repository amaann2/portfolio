import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import HomeHero from "../../Components/home-hero/HomeHero";
import Education from "../../Components/Education/Education";
import Skill from "../../Components/Skills/Skill";
import Project from "../../Components/Projects/Project";
import Contact from "../../Components/Contact/Contact";
const Home = ({ about, project, contact }) => {
  return (
    <>
      <div className="container">
        <section>
          <HomeHero />
        </section>
        <section ref={about}>
          <About />
          <Education />
          <Skill />
        </section>
        <section ref={project}>
          <Project />
        </section>
        <section ref={contact}>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
