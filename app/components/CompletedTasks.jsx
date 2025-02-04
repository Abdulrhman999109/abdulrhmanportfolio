"use client";
import React from 'react';

export default function CompletedTasks({ completedTasks }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-bold mb-3 border-b border-gray-600 pb-1">Completed Tasks</h3>
      {completedTasks.length === 0 ? (
        <p className="text-gray-400">No completed tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {completedTasks.map((task, index) => (
            <li
              key={index}
              className="p-3 bg-gray-700 rounded-lg shadow-sm text-gray-400 line-through"
            >
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
