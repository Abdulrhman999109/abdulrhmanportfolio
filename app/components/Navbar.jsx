"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start bg-gray-900 text-white py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src="/myLogo.png" alt="Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold text-yellow-50">Golden Task Manager</h1>
      </div>
    </nav>
  );
}
