import React from "react";
import { NavLink } from "react-router-dom";

import PersonalInfoIcon from "../assets/personalinfo.svg?react";
import AboutMeIcon from "../assets/aboutme.svg?react";
import EducationIcon from "../assets/education.svg?react";
import LanguageIcon from "../assets/language.svg?react";
import WorkExperienceIcon from "../assets/workexperience.svg?react";
import AreasofExpertiseIcon from "../assets/areasofexpertise.svg?react";
import ReferencesIcon from "../assets/references.svg?react";

const Leftbar = () => {
  const items = [
    { label: "Personal Info", icon: <PersonalInfoIcon className="w-5 h-5" />, path: "/builder/personal-info" },
    { label: "About me", icon: <AboutMeIcon className="w-5 h-5" />, path: "/builder/aboutme" },
    { label: "Education", icon: <EducationIcon className="w-5 h-5" />, path: "/builder/education" },
    { label: "Language", icon: <LanguageIcon className="w-5 h-5" />, path: "/builder/language" },
    { label: "Work Experience", icon: <WorkExperienceIcon className="w-5 h-5" />, path: "/builder/work-experience" },
    { label: "Areas of Expertise", icon: <AreasofExpertiseIcon className="w-5 h-5" />, path: "/builder/areas-of-expertise" },
    { label: "References", icon: <ReferencesIcon className="w-5 h-5" />, path: "/builder/references" },
  ];

  return (
    <>
      <div className="flex flex-col gap-2 pb-5 border-b border-[#DEE0E3]">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
          Select to fill details
        </h2>
        <p className="text-sm text-gray-500">
          Select and fill details individually.
        </p>
      </div>
      <nav className="grid grid-cols-2 pt-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col justify-center items-center rounded-xl gap-2 transition-all
                h-[98px] text-center text-sm font-medium
               ${isActive ? "active-gradient text-blue-800" :
                "hover:bg-gray-100 border-gray-200 text-gray-700"
              }`
            }
          >
            {item.icon}
            <span className="heading-primary">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Leftbar;
