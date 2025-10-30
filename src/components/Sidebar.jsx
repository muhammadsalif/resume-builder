import React from "react";
import { NavLink } from "react-router-dom";
import { User, BookOpen, Briefcase, Languages, Star, Users, BookText } from "lucide-react";

const Sidebar = () => {
  const items = [
    { label: "Personal Info", icon: <User size={20} />, path: "/builder/personal-info" },
    { label: "About me", icon: <BookText size={20} />, path: "/builder/aboutme" },
    { label: "Education", icon: <BookOpen size={20} />, path: "/builder/education" },
    { label: "Work Experience", icon: <Briefcase size={20} />, path: "/builder/work-experience" },
    { label: "Language", icon: <Languages size={20} />, path: "/builder/language" },
    { label: "Areas of Expertise", icon: <Star size={20} />, path: "/builder/areas-of-expertise" },
    { label: "References", icon: <Users size={20} />, path: "/builder/references" },
  ];

  return (
    <aside className="w-[320px] bg-white border-r border-gray-200 h-screen flex flex-col p-6">
      {/* Headings */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          Select to fill details
        </h2>
        <p className="text-sm text-gray-500">
          Select and fill details individually.
        </p>
      </div>

      <nav className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col justify-center items-center gap-2 rounded-xl border transition-all
               w-[136px] h-[98px] text-center text-sm font-medium
               ${isActive
                ? "bg-blue-100 border-blue-400 text-blue-700 shadow-sm"
                : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
