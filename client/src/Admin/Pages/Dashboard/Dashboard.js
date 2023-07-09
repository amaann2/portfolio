import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      const { data } = await axios.get('/api/v1/users/logout', { withCredentials: true })
      toast.success(data.message)
      navigate('/')
      window.location.reload(true)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <div>

    <button className="btn" onClick={logout}>logout</button>
  </div>;
};

export default Dashboard;
