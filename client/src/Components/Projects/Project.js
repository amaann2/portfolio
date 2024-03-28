import React, { useEffect } from "react";
import "./Project.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "../../Redux/Project/projectAction";

const Project = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProject());
  }, [dispatch]);

  return (
    <>
      <h2 className="heading--primary">My Project</h2>
      <main>
        {projects &&
          projects.map((project) => (
            <div className="courses-container" key={project._id}>
              <div className="course" data-aos="fade-up">
                <div className="course-preview">
                  <img src={project.imageCover} alt="" />
                </div>
                <div className="course-info">
                  <h6>{project.title}</h6>
                  <p>{project.description}</p>
                  <div className="tools">
                    {project.tools?.map((tool) => (
                      <div className="tool">{tool}</div>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    href={project.deployUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="btn"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
};

export default Project;
