import React from "react";
import { IoMdClose } from "react-icons/io";

export default function Alert({ alertType,msg,alertClose }) {
    
  return (
    <div
      className={`${
        alertType == "add"
          ? "bg-green-200 text-green-600"
          : alertType == "edit"
          ? "bg-blue-200 text-blue-700"
          : "bg-red-200 text-red-600"
      } px-5 py-3 rounded-md font-bold flex justify-between`}
    >
      <p>{msg}</p>
      <button onClick={alertClose} className="right-4 top-4 z-10">
          <IoMdClose className="text-2xl" />
        </button>
    </div>
  );
}
