import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await axios.post("/api/v1/contact", inputData);

      if (res.data.message) {
        setloading(false);
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      setInputData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <main>
      <h3 className="heading--primary">Contact me</h3>
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
              value={inputData.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="mail">
              <span className="label">
                Email <span className="required-star">*</span>
              </span>
            </label>

            <input
              type="email"
              id="mail"
              name="email"
              value={inputData.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="msg">
              <span className="label">Message</span>
            </label>
            <textarea
              rows={4}
              cols={50}
              defaultValue={""}
              name="message"
              value={inputData.message}
              onChange={handleChange}
            />
          </li>
          <li>
            <button className="btn" style={{ marginTop: "2rem" }}>
              {loading ? (
                <TailSpin
                  height="20"
                  width="20"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "submit"
              )}
            </button>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Contact;
