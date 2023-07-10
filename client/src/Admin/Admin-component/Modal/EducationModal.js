import React from "react";
import "./Modal.css";
const EducationModal = ({
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
    setFormInput({
      name: "",
      image: "",
    });
    closeModal();
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
              <label htmlFor="degree">
                <span className="label">
                  degree <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="text"
                id="Degree"
                name="degree"
                value={formInput.degree}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="from">
                <span className="label">
                  from <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="number"
                id="from"
                name="from"
                value={formInput.from}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="to">
                <span className="label">
                  to <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="number"
                id="to"
                name="to"
                value={formInput.to}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="percentage">
                <span className="label">
                  percentage <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="number"
                id="percentage"
                name="percentage"
                value={formInput.percentage}
                onChange={handleChange}
              />
            </li>{" "}
            <li>
              <label htmlFor="instituteName">
                <span className="label">
                  Institute Name <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="text"
                id="instituteName"
                name="instituteName"
                value={formInput.instituteName}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="fieldOfStudy">
                <span className="label">
                  fiel dOf Study <span className="required-star">*</span>
                </span>
              </label>

              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                value={formInput.fieldOfStudy}
                onChange={handleChange}
              />
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

export default EducationModal;
