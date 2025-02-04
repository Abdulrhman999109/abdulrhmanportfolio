"use client"

import Image from "next/image";
import TaskList from "./components/TaskList";
import { useState } from "react";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4">
      <TaskList />
    </div>
  );
}
