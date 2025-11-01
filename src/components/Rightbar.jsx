import React from "react";
import { NavLink } from "react-router-dom";

import PersonalInfoIcon from "../assets/personalinfo.svg?react";
import AboutMeIcon from "../assets/aboutme.svg?react";
import EducationIcon from "../assets/education.svg?react";
import LanguageIcon from "../assets/language.svg?react";
import WorkExperienceIcon from "../assets/workexperience.svg?react";
import AreasofExpertiseIcon from "../assets/areasofexpertise.svg?react";
import ReferencesIcon from "../assets/references.svg?react";
import TemplatePreview from "../components/TemplatePreview";

const Rightbar = () => {


  return (
    <aside class="hidden md:flex w-[320px] bg-white border-r border-gray-200 flex-col p-6">
      <div className="flex flex-col gap-2 p-5 border-b border-[#DEE0E3]">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
          Select your resumes
        </h2>
        <p className="text-sm text-gray-500">
          Select and fill details individually.
        </p>
      </div>
      <TemplatePreview />
    </aside>
  );
};

export default Rightbar;
