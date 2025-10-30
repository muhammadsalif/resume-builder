import React from "react";
import { useResumeStore } from "../../store/resumeStore";

export default function PreviewPane(){
  const { personalInfo, about } = useResumeStore();

  return (
    <div className="bg-white rounded shadow h-full p-6 overflow-auto">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        <div>
          <h2 className="text-xl font-semibold">{personalInfo.fullName || "Full Name"}</h2>
          <div className="text-sm text-gray-500">{personalInfo.title || "Job Title"}</div>
          <div className="text-sm text-gray-500">{personalInfo.email} • {personalInfo.phone}</div>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="font-semibold">About</h3>
        <p className="text-sm text-gray-700">{about || "Short summary will show here."}</p>
      </section>

      {/* more preview sections */}
    </div>
  );
}
