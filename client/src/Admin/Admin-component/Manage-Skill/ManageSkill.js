import React from "react";
import "./ManageSkill.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal/Modal";
import Table from "../Table";
import { toast } from "react-toastify";
const ManageSkill = () => {
  const [data, setData] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getSkill = async () => {
      try {
        const { data } = await axios.get("/api/v1/skill");
        setData(data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getSkill();
  }, [data]);
  const [formInput, setFormInput] = useState({
    name: "",
    image: "",
  });
  const columns = [
    { key: "name", title: "Name" },
    {
      key: "image",
      title: "Image",
      render: (item) => <img src={item.image} alt="" className="table-image" />,
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
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/skill/${id}`, {
        withCredentials: true,
      });
      toast.success(data.status);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleEdit = async (val) => {
    setModalOpen(true);
    setFormInput(val);

    try {
      const { data } = await axios.patch(
        `/api/v1/skill/${val._id}`,
        formInput,
        { withCredentials: true }
      );
      toast.success(data.status);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleAdd = async (formInput) => {
    try {
      const { data } = await axios.post("/api/v1/skill", formInput, {
        withCredentials: true,
      });
      toast.success(data.status);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div>
        {modalOpen && (
          <Modal
            closeModal={() => setModalOpen(false)}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
            formInput={formInput}
            setFormInput={setFormInput}
          />
        )}

        <h3 className="heading--primary">Manage Skill</h3>
        <div className="add">
          <button className="btn add-btn" onClick={() => setModalOpen(true)}>
            Add Skill
          </button>
        </div>

        <div className="table" style={{ marginBottom: "5rem" }}>
          <Table data={data} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default ManageSkill;
