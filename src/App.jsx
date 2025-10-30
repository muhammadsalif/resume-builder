import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ResumeBuilder from "./pages/ResumeBuilder";
import PreviewPage from "./pages/PreviewPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/builder/personal-info" replace />} />
      <Route path="/builder/*" element={<ResumeBuilder />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  );
}
