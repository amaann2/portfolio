import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { getAllAbout } from "../../../Redux/About/aboutAction";
import axios from "axios";
const ManageAbout = () => {
    const dispatch = useDispatch();
    const { about } = useSelector((state) => state.about);
    useEffect(() => {
        dispatch(getAllAbout());
    }, [dispatch]);
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        summary: "",
        photo: "",
        aboutMe: [],
        linkedin: "",
        github: "",
        instagram: "",
        twitter: ""
    })

    useEffect(() => {
        if (about && about.length > 0) {
            setFormInput((prevFormInput) => ({
                ...prevFormInput,
                ...about[0]
            }));
        }
    }, [about]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevFormInput) => ({
            ...prevFormInput,
            [name]: value
        }));
    };
    const handleAboutMeChange = (index, e) => {
        const { value } = e.target;
        const updatedAboutMe = [...formInput.aboutMe];
        updatedAboutMe[index] = value;
        setFormInput((prevFormInput) => ({
            ...prevFormInput,
            aboutMe: updatedAboutMe
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (about) {
            try {
                const { data } = await axios.patch(`/api/v1/about/${about[0]?._id}`, formInput, { withCredentials: true })
                toast.success(data.status)
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    }
    return <div >
        <h3 className="heading--primary">Manage About</h3>
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
                    <label htmlFor="email">
                        <span className="label">
                            email <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formInput.email}
                        onChange={handleChange}


                    />
                </li>
                <li>
                    <label htmlFor="summary">
                        <span className="label">
                            summary <span className="required-star">*</span>
                        </span>
                    </label>


                    <textarea
                        id="summary"
                        name="summary"
                        value={formInput.summary}
                        onChange={handleChange}
                        rows={5}
                    />
                </li>

                <li>
                    <label htmlFor="photo">
                        <span className="label">
                            photo <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        value={formInput.photo}
                        onChange={handleChange}


                    />
                </li>
                <li>
                    <label htmlFor="aboutMe">
                        <span className="label">
                            About Me <span className="required-star">*</span>
                        </span>
                    </label>

                    {formInput.aboutMe.map((aboutItem, index) => (
                        <textarea
                            key={index}
                            id={`aboutMe-${index}`}
                            name={`aboutMe[${index}]`}
                            value={aboutItem}
                            onChange={(e) => handleAboutMeChange(index, e)}
                            rows={5}

                        />
                    ))}

                </li>
                <li>
                    <label htmlFor="linkedin">
                        <span className="label">
                            linkedin <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={formInput.linkedin}
                        onChange={handleChange}


                    />
                </li>
                <li>
                    <label htmlFor="github">
                        <span className="label">
                            github <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="text"
                        id="github"
                        name="github"
                        value={formInput.github}
                        onChange={handleChange}


                    />
                </li>
                <li>
                    <label htmlFor="instagram">
                        <span className="label">
                            instagram <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formInput.instagram}
                        onChange={handleChange}


                    />
                </li>
                <li>
                    <label htmlFor="twitter">
                        <span className="label">
                            twitter <span className="required-star">*</span>
                        </span>
                    </label>

                    <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formInput.twitter}
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
    </div>;
};

export default ManageAbout;
