import React from "react";
import "./About.css";
import about from './../../assets/amaan2.jpg'
const About = () => {
  return (
    <div className="about">
      <h2 className="heading--primary">About me</h2>

      <div className="row">
        <div className="col-2">
          <p>My education background includes a Bachelor of Computer Applications in Computer Science, currently underway at Somaiya Vidyavihar University. Prior to this, I completed my high school education in Science at S.M. Shetty College- Degree Section, where I studied physics, chemistry, mathematics, biology, and IT. I also completed my SSC from Eden High School, where I achieved a grade of 82.00%. <br /> <br />
            As a passionate and driven Computer Science student, I have developed a strong foundation in frontend development and proficiency in programming languages such as HTML, CSS, JavaScript, and React. In addition to these, I also have knowledge in other programming languages such as Java, C++, Python, and Node.js. <br /> <br />
            As a quick learner, I'm open to internship opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me where I can leverage my existing skill set and expand it further through ongoing studies and future projects </p>
        </div>
        <div className="col-2">
          <div className="profile-img">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
