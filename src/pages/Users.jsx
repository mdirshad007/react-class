import Axios from "axios";
import React, { useEffect, useState } from "react";
import AddModel from "../components/AddModel";
import Alert from "../components/Alert";
import EditModel from "../components/EditModel";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import Searchbar from "../components/Searchbar";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const apiLink = "https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users";

  const fetchData = (api) => {
    Axios.get(api)
      .then((response) => {
        setUserData(response.data);
        setFilteredUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(apiLink);
  }, []);

  const [showAddModel, setShowAddModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [addStatus, setAddStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  const handleAddResultStatus = (status) => {
    setAddStatus(status);
  };

  useEffect(() => {
    fetchData(apiLink);
    setTimeout(() => {
      setDeleteStatus(false);
    }, 1500);
    setTimeout(() => {
      setAddStatus(false);
    }, 1500);
    setTimeout(() => {
      setEditStatus(false);
    }, 1500);
  }, [addStatus, deleteStatus, editStatus]);

  const handleDelete = (id) => {
    Axios.delete(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`)
      .then(() => setDeleteStatus(true))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditResultStatus = (status) => {
    setEditStatus(status);
  };

  const handleEdit = (id, name, email, phone, city) => {
    const userDetail = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      city: city,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetail));
    setShowEditModel(true);
  };

  const handleSearchValue = (value) => {
    const data = userData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase()) || item.phone.toLowerCase().includes(value.toLowerCase())||item.city.toLowerCase().includes(value.toLowerCase()));
    setFilteredUserData(data);
  };

  useEffect(() => {
    console.log(filteredUserData);
  }, [filteredUserData]);

  return (
    <div>
      <div className="max-w-[960px] mx-auto w-full mb-8">
        <Searchbar searchValue={handleSearchValue} />
      </div>
      <div className="flex justify-between max-w-[960px] mx-auto w-full mb-8 border-b pb-5">
        <Fade direction="up">
          <h1 className="text-4xl font-bold">All User Records</h1>
        </Fade>
        <AttentionSeeker effect="pulse">
          <button
            className="bg-green-600 text-white px-5 py-2"
            onClick={() => setShowAddModel(true)}
          >
            Add New User
          </button>
        </AttentionSeeker>
      </div>

      {addStatus && (
        <div className="max-w-[960px] mx-auto">
          <Alert
            msg="User is added"
            alertType="add"
            alertClose={() => setAddStatus(false)}
          />
        </div>
      )}

      {deleteStatus && (
        <div className="max-w-[960px] mx-auto">
          <Alert
            msg="User is deleted"
            alertType="delete"
            alertClose={() => setAddStatus(false)}
          />
        </div>
      )}
      {editStatus && (
        <div className="max-w-[960px] mx-auto">
          <Alert
            msg="User details edited successfully"
            alertType="edit"
            alertClose={() => setEditStatus(false)}
          />
        </div>
      )}

      <table className="w-full max-w-[960px] mx-auto">
        <thead>
          <tr>
            <th className="font-bold border-b px-4 py-4 text-left">Name</th>
            <th className="font-bold border-b px-4 py-4 text-left">Email</th>
            <th className="font-bold border-b px-4 py-4 text-left">Phone</th>
            <th className="font-bold border-b px-4 py-4 text-left">City</th>
            <th className="font-bold border-b px-4 py-4 text-left">Edit</th>
            <th className="font-bold border-b px-4 py-4 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.map((item, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-4">
                <Link to={`/users/${item.id}`}>{item.name}</Link>
              </td>
              <td className="border-b px-4 py-4">{item.email}</td>
              <td className="border-b px-4 py-4">{item.phone}</td>
              <td className="border-b px-4 py-4">{item.city}</td>
              <td className="border-b px-4 py-4">
                <button
                  className="bg-blue-700 text-white px-3 py-2"
                  onClick={() =>
                    handleEdit(item.id, item.name, item.email, item.phone, item.city)
                  }
                >
                  Edit
                </button>
              </td>
              <td className="border-b px-4 py-4 text-center">
                <button
                  className="bg-red-600 text-white px-3 py-2"
                  onClick={() => {
                    window.confirm("Are you sure you want to delete?") &&
                      handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModel && (
        <AddModel
          onClose={() => setShowAddModel(false)}
          addResult={handleAddResultStatus}
        />
      )}
      {showEditModel && (
        <EditModel
          onClose={() => setShowEditModel(false)}
          editResult={handleEditResultStatus}
        />
      )}
    </div>
  );
}
