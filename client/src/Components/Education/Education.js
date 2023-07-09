import React, { useEffect } from "react";
import "./Education.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "./../../Redux/Education/educatonAction";
const Education = () => {
  const dispatch = useDispatch();
  const { educations } = useSelector((state) => state.education);
  useEffect(() => {
    dispatch(getAllEducation());
  }, [dispatch]);

  return (
    <main>
      <h3 className="heading--primary">Education</h3>
      <div className="timeline">
        {educations &&
          educations.map((education) => (
            <div className="tl-content " data-aos="fade-up" key={education._id}>
              <div className="tl-header">
                <span className="tl-marker" />
                <p className="tl-title">{education.degree}</p>
                <p className="t1-subtitle">{education.instituteName}</p>
              </div>
              <div className="tl-body">
                <p>
                  <time className="tl-time" dateTime="2023-06-20">
                    {education.from} - {education.to}
                  </time>
                </p>
                <p>
                  <time className="tl-time">
                    Percentage / GPA - {education.percentage}
                  </time>
                </p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Education;
