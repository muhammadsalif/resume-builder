import PersonalInfoForm from "../features/personal-info/PersonalInfoForm";
import { Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Routes>
        <Route path="personal-info" element={<PersonalInfoForm />} />
        <Route path="aboutme" element={<div>About (placeholder)</div>} />
        <Route path="education" element={<div>Education (placeholder)</div>} />
        <Route path="language" element={<div>Language (placeholder)</div>} />
        <Route path="work-experience" element={<div>Work Experience (placeholder)</div>} />
        <Route path="areas-of-expertise" element={<div>Areas of Expertise (placeholder)</div>} />
        <Route path="references" element={<div>References (placeholder)</div>} />
        <Route path="*" element={<Navigate to="/builder/personal-info" replace />} />
      </Routes>
    </div>
  );
};

export default Main;
