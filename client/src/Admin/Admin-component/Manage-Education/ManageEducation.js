import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../../Redux/Education/educatonAction";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Table from "../Table";
import axios from "axios";
import EducationModal from "../Modal/EducationModal";
import { toast } from "react-toastify";

const ManageEducation = () => {
  const dispatch = useDispatch();
  const { educations } = useSelector((state) => state.education);
  const [modalOpen, setModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    degree: "",
    from: "",
    to: "",
    percentage: "",
    instituteName: "",
    fieldOfStudy: "",
  });
  useEffect(() => {
    dispatch(getAllEducation());
  }, [dispatch]);
  const columns = [
    { key: "degree", title: "Name" },
    { key: "from", title: "from" },
    { key: "to", title: "to" },
    { key: "instituteName", title: "institute" },
    {
      key: "actions",
      title: "Actions",
      render: (item) => (
        <>
          <FiEdit
            className="table-icon edit"
            onClick={() => {
              handleEdit(item);
            }}
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
      const { data } = await axios.delete(`/api/v1/education/${id}`, {
        withCredentials: true,
      });
      toast.success(data.status);
      dispatch(getAllEducation());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleEdit = async (val) => {
    setModalOpen(true);
    setFormInput(val);

    try {
      const { data } = await axios.patch(
        `/api/v1/education/${val._id}`,
        formInput,
        { withCredentials: true }
      );
      toast.success(data.status);

      dispatch(getAllEducation());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleAdd = async (formInput) => {
    try {
      const { data } = await axios.post("/api/v1/education", formInput, {
        withCredentials: true,
      });
      toast.success(data.status);

      dispatch(getAllEducation());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      {modalOpen && (
        <EducationModal
          closeModal={() => setModalOpen(false)}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          formInput={formInput}
          setFormInput={setFormInput}
        />
      )}
      <h3 className="heading--primary">Manage Education</h3>
      <div className="add">
        <button className="btn add-btn" onClick={() => setModalOpen(true)}>
          Add Education
        </button>
      </div>

      <div className="table" style={{ marginBottom: "5rem" }}>
        <Table columns={columns} data={educations} />
      </div>
    </div>
  );
};

export default ManageEducation;
