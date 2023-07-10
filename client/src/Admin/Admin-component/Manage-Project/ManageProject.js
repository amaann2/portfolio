import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "../../../Redux/Project/projectAction";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Table from "../Table";
import ProjectModal from "../Modal/ProjectModal";
import axios from "axios";
import { toast } from "react-toastify";

const ManageProject = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const [modalOpen, setModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    imageCover: "",
    tools: [],
    githubUrl: "",
    deployUrl: "",
  });
  useEffect(() => {
    dispatch(getAllProject());
  }, [dispatch]);
  const columns = [
    { key: "title", title: "Name" },
    { key: "deployUrl", title: "Deploy" },
    { key: "githubUrl", title: "GitHub" },
    {
      key: "imageCover",
      title: "Image",
      render: (item) => (
        <img src={item.imageCover} alt="" className="table-image" />
      ),
    },
    {
      key: "actions",
      title: "Actions",
      render: (item) => (
        <>
          <FiEdit
            className="table-icon edit"
            onClick={() => handleEdit(item)}
          />
          <AiFillDelete
            className="table-icon delete"
            onClick={() => handleDelete(item._id)}
          />
        </>
      ),
    },
  ];
  const handleAdd = async (formInput) => {
    try {
      const { data } = await axios.post("/api/v1/project", formInput, {
        withCredentials: true,
      });
      toast.success(data.status);

      dispatch(getAllProject());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleEdit = async (val) => {
    setModalOpen(true);
    setFormInput(val);

    try {
      const { data } = await axios.patch(
        `/api/v1/project/${val._id}`,
        formInput,
        { withCredentials: true }
      );
      toast.success(data.status);

      dispatch(getAllProject());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/project/${id}`, {
        withCredentials: true,
      });
      toast.success(data.status);

      dispatch(getAllProject());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      {modalOpen && (
        <ProjectModal
          closeModal={() => setModalOpen(false)}
          formInput={formInput}
          setFormInput={setFormInput}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
        />
      )}
      <h3 className="heading--primary">manage project</h3>
      <div className="add">
        <button className="btn add-btn" onClick={() => setModalOpen(true)}>
          Add Project
        </button>
      </div>

      <div className="table" style={{ marginBottom: "5rem" }}>
        <Table columns={columns} data={projects} />
      </div>
    </div>
  );
};

export default ManageProject;
