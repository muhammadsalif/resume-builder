import { PersonalInfoForm } from "../Leftbar/sections/PersonalInfoForm";
import { AboutForm } from "../Leftbar/sections/AboutForm";
import { EducationForm } from "../Leftbar/sections/EducationForm";
import { LanguageForm } from "../Leftbar/sections/LanguageForm";
import { WorkExperienceForm } from "../Leftbar/sections/WorkExperienceForm";
import { AreasForm } from "../Leftbar/sections/AreasForm";
import { ReferencesForm } from "../Leftbar/sections/ReferencesForm";
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
