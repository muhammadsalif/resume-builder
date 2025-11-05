import PersonalInfoForm from "../../../features/personal-info/PersonalInfoForm";
import AboutForm from "../../../features/about/AboutForm";
import EducationForm from "../../../features/education/EducationForm";
import LanguageForm from "../../../features/language/LanguageForm";
import WorkExperienceForm from "../../../features/work-experience/WorkExperienceForm";
import AreasForm from "../../../features/areas/AreasForm";
import ReferencesForm from "../../../features/references/ReferencesForm";
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
