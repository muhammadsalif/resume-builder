import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Rightbar from "../components/Rightbar";
import "./resumeBuilder.css";

export default function ResumeBuilder() {
  return (
    <div className="rb-root">
      <header className="flex items-center justify-between px-6 py-6 bg-white border-b border-gray-200 text-gray-900 font-semibold text-lg">
        Resume Builder
      </header>

      <div className="rb-container flex h-screen">
        <aside className="hidden md:flex w-[320px] bg-white border-r border-gray-200 flex-col p-6">
          <Sidebar />
        </aside>
        <div className="rb-center flex-1 min-w-0 bg-gray-50">
          <Main />
        </div>
        <aside className="hidden md:flex bg-white border-r border-gray-200 flex-col p-6">
          <Rightbar />
        </aside>
      </div>
    </div>
  );
}
