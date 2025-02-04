"use client";
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import CompleteBtn from './CompleteBtn';
import CompletedTasks from './CompletedTasks';

export default function TaskList() {
  const [items, setItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("items")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setItems(storedTasks);
    setCompletedTasks(storedCompleted);
  }, []);

  const addItem = (item) => {
    const newList = [...items, item];
    setItems(newList);
    localStorage.setItem("items", JSON.stringify(newList));
  };

  const handleComplete = (task) => {
    const updatedCompleted = [...completedTasks, task];
    setCompletedTasks(updatedCompleted);
    localStorage.setItem("completedTasks", JSON.stringify(updatedCompleted));
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl w-full max-w-md mx-auto border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 text-center text-yellow-50">Task Manager</h2>
      <AddTask onAdd={addItem} />
      
      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-400">No tasks available.</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <span>{item}</span>
              <div className="flex gap-2">
                <CompleteBtn
                  index={index}
                  items={items}
                  setItems={setItems}
                  onComplete={handleComplete}
                />
                <DeleteTask index={index} items={items} setItems={setItems} />
              </div>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => setShowCompleted(!showCompleted)}
        className="bg-yellow-50 hover:bg-yellow-300 text-gray-600 px-4 py-2 rounded-lg mt-4 w-full transition"
      >
        {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </button>

      {showCompleted && <CompletedTasks completedTasks={completedTasks} />}
    </div>
  );
}
