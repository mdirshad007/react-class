import Axios from "axios";
import React, { useEffect, useState } from "react";
import AddModel from "../components/AddModel";
import Alert from "../components/Alert";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const apiLink = "https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users";
  const fetchData = (api) => {
    Axios.get(api)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(apiLink);
  }, []);

  const [showAddModel, setShowAddModel] = useState(false);
  const [addStatus, setAddStatus] = useState(false);
  const handelAddResultStatus = (status) => {
    setAddStatus(status);
    setTimeout(() => {
        setAddStatus(false);
    }, 1500);
  };
  useEffect(() => {
    fetchData(apiLink);
  }, [addStatus]);

  const handelDelete=(id)=>{
    console.log("inside hande delete", id)
  }
  const handelEdit=(id)=>{
    console.log("inside hande edit", id)
  }

  return (
    <div>
      <div className="flex justify-between max-w-[960px] mx-auto w-full mb-8 border-b pb-5">
        <h1 className="text-4xl font-bold">All User Records</h1>
        <button
          className="bg-green-600 text-white px-5 py-2"
          onClick={() => setShowAddModel(true)}
        >
          Add New User
        </button>
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

      <table className="w-full max-w-[960px] mx-auto">
      <thead>
        <tr>
          <th className="font-bold border-b px-4 py-4">Name</th>
          <th className="font-bold border-b px-4 py-4">Email</th>
          <th className="font-bold border-b px-4 py-4">Phone</th>
          <th className="font-bold border-b px-4 py-4">City</th>
          <th className="font-bold border-b px-4 py-4">Edit</th>
          <th className="font-bold border-b px-4 py-4">Delete</th>
        </tr>
        </thead>
        <tbody>
        {userData.map((item, index) => (
          <tr key={index}>
            <td className="border-b px-4 py-4 text-center">{item.name}</td>
            <td className="border-b px-4 py-4 text-center">{item.email}</td>
            <td className="border-b px-4 py-4 text-center">{item.phone}</td>
            <td className="border-b px-4 py-4 text-center">{item.city}</td>
            <td className="border-b px-4 py-4 text-center">
              <button className="bg-blue-700 text-white px-3 py-2" onClick={()=>handelEdit(item.id)}>Edit</button>
            </td>
            <td className="border-b px-4 py-4 text-center">
              <button className="bg-red-600 text-white px-3 py-2" onClick={()=>handelDelete(item.id)}>
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
          addResult={handelAddResultStatus}
        />
      )}
    </div>
  );
}
