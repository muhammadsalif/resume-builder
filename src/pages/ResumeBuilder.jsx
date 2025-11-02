import React from "react";
import Leftbar from "../components/Leftbar";
import Main from "../components/Main";
import Rightbar from "../components/Rightbar";
import "./resumeBuilder.css";

export default function ResumeBuilder() {
  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 bg-white border-b border-gray-200 text-gray-900 font-semibold text-lg">
        Resume Builder
      </header>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-4 p-4 flex-1">
        {/* Left Sidebar */}
        <aside className="hidden md:flex w-[320px] bg-white border border-gray-200 rounded-xl flex-col p-6 shadow-sm">
          <Leftbar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col p-6 shadow-sm">
          <Main />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:flex w-[320px] bg-white border border-gray-200 rounded-xl flex-col p-6 shadow-sm">
          <Rightbar />
        </aside>
      </div>
    </div>
  );
}
