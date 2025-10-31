import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PersonalInfoForm from "../features/personal-info/PersonalInfoForm";
import TemplatePreview from "../components/TemplatePreview";
import "./resumeBuilder.css";

export default function ResumeBuilder() {
  return (
    <div className="rb-root">
      <header className="flex items-center justify-between px-6 py-6 bg-white border-b border-gray-200 text-gray-900 font-semibold text-lg">
        Resume Builder
      </header>

      <div className="rb-container">
        <Sidebar />

        <div className="rb-center">
          <div className="rb-card">
            <Routes>
              <Route path="personal-info" element={<PersonalInfoForm />} />
              <Route path="about" element={<div className="placeholder">About (placeholder)</div>} />
              <Route path="education" element={<div className="placeholder">Education (placeholder)</div>} />
              <Route index element={<div className="placeholder">Select a section</div>} />
            </Routes>
          </div>
        </div>

        <aside className="rb-right">
          <div className="rb-right-card">
            <h4 className="small-title">Select your resumes</h4>
            <TemplatePreview />
            <div className="small-title" style={{ marginTop: 16 }}>Select template</div>
            <div className="template-thumbs">
              <div className="thumb active" />
              <div className="thumb" />
              <div className="thumb" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
