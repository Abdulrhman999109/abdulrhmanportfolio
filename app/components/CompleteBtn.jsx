"use client";
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function CompleteBtn({ index, items, setItems, onComplete }) {
  const handleComplete = () => {
    const completedTask = items[index];
    onComplete(completedTask);
    const updatedTasks = items.filter((_, i) => i !== index);
    setItems(updatedTasks);
    localStorage.setItem("items", JSON.stringify(updatedTasks));
  };

  return (
    <button
      onClick={handleComplete}
      className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
    >
      <FaCheckCircle size={18} />
    </button>
  );
}
