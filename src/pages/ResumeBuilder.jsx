import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import PersonalInfoForm from "../features/personal-info/PersonalInfoForm";
import TemplatePreview from "../components/TemplatePreview";
import "./resumeBuilder.css";

export default function ResumeBuilder() {
  return (
    <div className="rb-root">
      <header className="flex items-center justify-between px-6 py-6 bg-white border-b border-gray-200 text-gray-900 font-semibold text-lg">
        Resume Builder
      </header>

      <div className="rb-container flex h-screen">
        <Sidebar />

        <div className="rb-center flex-1 min-w-0 bg-gray-50">
          <div className="rb-card">
            <Routes>
              <Route path="personal-info" element={<PersonalInfoForm />} />
              <Route path="aboutme" element={<div className="placeholder">About (placeholder)</div>} />
              <Route path="education" element={<div className="placeholder">Education (placeholder)</div>} />
              <Route path="language" element={<div className="placeholder">language (placeholder)</div>} />
              <Route path="work-experience" element={<div className="placeholder">work-experience (placeholder)</div>} />
              <Route path="areas-of-expertise" element={<div className="placeholder">areas-of-expertise (placeholder)</div>} />
              <Route path="references" element={<div className="placeholder">references (placeholder)</div>} />
              <Route path="*" element={<Navigate to="/builder/personal-info" replace />} />
            </Routes>
          </div>
        </div>

        {/* <Rightbar /> */}
      </div>
    </div>
  );
}
