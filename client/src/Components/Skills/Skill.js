import React, { useEffect, useState } from "react";
import "./Skill.css";
import axios from "axios";
import { toast } from "react-toastify";
const Skill = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getSkill = async () => {
      try {
        const { data } = await axios.get("/api/v1/skill");
        setData(data.data);
      } catch (error) {
        toast.success(error);
      }
    };
    getSkill();
  }, []);

  return (
    <main className="layout">
      <h2 className="heading--primary">SKILLS</h2>
      <div className=" skill">
        {data &&
          data.map((skill) => (
            <div className="skills_skill" data-aos="fade-up" key={skill._id}>
              <img src={skill.image} alt="skill" className="skill-icon" />
              <h5>{skill.name}</h5>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Skill;
