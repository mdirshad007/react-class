import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { IoMdClose } from "react-icons/io";

export default function EditModel({ onClose,editResult}) {
  const modelRef = useRef();
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  useEffect(()=>{
    let userDetails=localStorage.getItem("userDeatils")
    userDetails=JSON.parse(userDetails)
    setId(userDetails.id)
    setName(userDetails.name)
    setEmail(userDetails.email)
    setPhone(userDetails.phone)
    setCity(userDetails.city)
  },[])

  const handelUpdate = (e) => {
    e.preventDefault();
    Axios.put(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`, {
      name: name,
      email: email,
      phone: phone,
      city: city,
    })
      .then((response) => {
        console.log(response.status);
        if(response.status==200){
          editResult(true)
          onClose();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <Zoom>
      <div className="bg-white px-8 py-10 max-w-[600px] w-full rounded-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 z-10">
          <IoMdClose className="text-2xl hover:text-red-600" />
        </button>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Edit User Details</h2>
        </div>
        <form
          action=""
          className="mt-5 flex flex-col gap-5"
          onSubmit={handelUpdate}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="bg-white px-2 ml-5 mb-[-10px] w-fit z-10"
              >
                Name
              </label>
              <input
                type="text"
                className=" border border-gray-200 h-14 rounded-md px-4 focus:border-blue-700 focus:outline-none"
                required
                placeholder="Enter User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="bg-white px-2 ml-5 mb-[-10px] w-fit z-10"
              >
                Email
              </label>
              <input
                type="email"
                className=" border border-gray-200 h-14 rounded-md px-4 focus:border-blue-700 focus:outline-none"
                required
                placeholder="Enter User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="bg-white px-2 ml-5 mb-[-10px] w-fit z-10"
              >
                Phone Number
              </label>
              <input
                type="text"
                className=" border border-gray-200 h-14 rounded-md px-4 focus:border-blue-700 focus:outline-none"
                required
                placeholder="Enter User Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="bg-white px-2 ml-5 mb-[-10px] w-fit z-10"
              >
                City
              </label>
              <input
                type="text"
                className=" border border-gray-200 h-14 rounded-md px-4 focus:border-blue-700 focus:outline-none"
                required
                placeholder="Enter User City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-3 rounded-md">
            Update User
          </button>
        </form>
      </div>
      </Zoom>
    </div>
  );
}
