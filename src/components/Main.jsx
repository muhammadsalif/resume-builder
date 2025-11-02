import PersonalInfoForm from "../features/personal-info/PersonalInfoForm";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
