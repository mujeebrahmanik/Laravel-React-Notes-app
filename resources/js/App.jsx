import React from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";

export default function App() {
  return (
    <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-15 px-6">
            <Task />
        </div>
    </>
  );
}
