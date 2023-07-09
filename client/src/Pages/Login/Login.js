import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { connect } from "react-redux";
import { setCurrentUser } from "./../../Redux/User/userAction";
const Login = ({ setCurrentUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`/api/v1/users/login`, inputValue);
      setLoading(false);
      toast.success(res.data.status);
      setCurrentUser(res.data.data.user);
      setInputValue({
        email: "",
        password: "",
      });
      navigate("/admin/dashboard");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <main>
      <h3 className="heading--primary">Admin Login </h3>
      <form onSubmit={handleSubmit}>
        <ul>
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
              value={inputValue.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="password">
              <span className="label">
                Password <span className="required-star">*</span>
              </span>
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={inputValue.password}
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Login);
