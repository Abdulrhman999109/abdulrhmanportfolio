"use client";
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function DeleteTask({ index, items, setItems }) {
  const handleDelete = () => {
    const updatedTasks = items.filter((_, i) => i !== index);
    setItems(updatedTasks);
    localStorage.setItem("items", JSON.stringify(updatedTasks));
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
    >
      <FaTrashAlt size={18} />
    </button>
  );
}
