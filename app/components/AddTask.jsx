"use client";
import React, { useState } from 'react';

export default function AddTask({ onAdd }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-2 mb-4">
      <input
        className="bg-gray-800 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-50"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-yellow-50 hover:bg-yellow-300 text-gray-700 px-5 py-3 rounded-lg transition-transform transform hover:scale-105"
      >
        Add
      </button>
    </form>
  );
}
