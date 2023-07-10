import React from "react";
import './Modal.css'
const Modal = ({ closeModal, handleAdd, setFormInput, formInput, handleEdit }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formInput._id) {
            handleEdit(formInput);
        } else {
            handleAdd(formInput);
        }
        setFormInput({
            name: "",
            image: ""
        })
        closeModal()
    }

    return <div className="modal-container" onClick={(e) => {
        if (e.target.className === "modal-container") closeModal()
    }}>
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
                            name="name"
                            value={formInput.name}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="image">
                            <span className="label">
                                image <span className="required-star">*</span>
                            </span>
                        </label>

                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formInput.image}
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
    </div>;
};

export default Modal;
