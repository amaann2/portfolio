import React, { useState } from "react";
import "./Modal.css";
const ProjectModal = ({
  closeModal,
  handleAdd,
  setFormInput,
  formInput,
  handleEdit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput._id) {
      handleEdit(formInput);
    } else {
      handleAdd(formInput);
    }
    closeModal();
  };
  const [toolsInput, setToolsInput] = useState("");

  const handleAddTool = () => {
    if (toolsInput) {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        tools: [...prevFormInput.tools, toolsInput],
      }));
      setToolsInput("");
    }
  };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">
                <span className="label">
                  Name <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="text"
                id="name"
                name="title"
                value={formInput.title}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="description">
                <span className="label">
                  Description <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="text"
                id="description"
                name="description"
                value={formInput.description}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="image">
                <span className="label">image</span>
              </label>

              <input
                type="text"
                id="image"
                name="imageCover"
                value={formInput.imageCover}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="githubUrl">
                <span className="label">githubUrl</span>
              </label>
              <input
                type="text"
                id="githubUrl"
                name="githubUrl"
                value={formInput.githubUrl}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="deployUrl">
                <span className="label">DeployUrl</span>
              </label>

              <input
                type="text"
                id="deployUrl"
                name="deployUrl"
                value={formInput.deployUrl}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="tools">
                <span className="label">Tools</span>
              </label>
              <input
                type="text"
                id="tools"
                name="toolsInput"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={handleAddTool}
                style={{ marginTop: "0.5rem" }}
              >
                Add Tool
              </button>
              <ul>
                {formInput.tools &&
                  formInput.tools.map((tool, index) => (
                    <li key={index} style={{ color: "white" }}>
                      {tool}
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <button className="btn" style={{ marginTop: "2rem" }}>
                submit
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
