import { PersonalInfoForm } from "./sections/PersonalInfoForm";
import { AboutForm } from "./sections/AboutForm";
import { EducationForm } from "./sections/EducationForm";
import { LanguageForm } from "./sections/LanguageForm";
import { WorkExperienceForm } from "./sections/WorkExperienceForm";
import { AreasForm } from "./sections/AreasForm";
import { ReferencesForm } from "./sections/ReferencesForm";
import { Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Routes>
        <Route path="personal-info" element={<PersonalInfoForm />} />
        <Route path="aboutme" element={<AboutForm />} />
        <Route path="education" element={<EducationForm />} />
        <Route path="language" element={<LanguageForm />} />
        <Route path="work-experience" element={<WorkExperienceForm />} />
        <Route path="areas-of-expertise" element={<AreasForm />} />
        <Route path="references" element={<ReferencesForm />} />
        <Route path="*" element={<Navigate to="/builder/personal-info" replace />} />
      </Routes>
    </div>
  );
};

export default Main;
