import Dot from "./Dot";
import { useResumeStore } from "../store/resumeStore";

function RightPanel() {
  const personalInfo = useResumeStore((state) => state.personalInfo);
  const about = useResumeStore((state) => state.about);
  const workExperience = useResumeStore((state) => state.workExperience);
  const education = useResumeStore((state) => state.education);
  const languages = useResumeStore((state) => state.languages);
  const expertise = useResumeStore((state) => state.expertise);
  
  const sections = [
    { title: "About me" },
    { title: "Work Experience" },
    { title: "Education" },
    { title: "Areas of expertise" },
    { title: "Language" },
  ];

  return (
    <div className="template-column relative overflow-hidden bg-transparent min-h-screen">
      {/* Right rail content */}
      <div className="bg-white relative z-30 flex flex-col items-start text-black h-full min-h-screen md:pl-4 md:pt-8 md:pb-4">
        {/* Header Section */}
        <div className="avatar-wrap mb-6">
          <div className="flex flex-col items-start">
            <h3 className="text-[18px] sm:text-[24px] font-bold text-black font-inter leading-tight">
              {personalInfo.fullName || "Full Name"}
            </h3>
            <p className="text-[10px] sm:text-[14px] text-gray-600 font-inter mt-1">
              {personalInfo.title || "Your Title"}
            </p>
          </div>
        </div>

        {/* Timeline / Sections */}
        <div className="relative w-full">
          <div className="space-y-1">
            {sections.map((s, i) => (
              <div key={i} className="rail-item flex flex-col gap-1 relative">
                {/* Orange stretched dot + Title */}
                <div className="flex items-center gap-1">
                  <Dot className="w-1 h-6 flex-shrink-0" />
                  <h3 className="text-[10px] font-bold leading-[100%] text-black font-inter">
                    {s.title}
                  </h3>
                </div>

                {/* Section Content */}
                <div className="relative flex flex-col gap-4 mt-1 w-[190px]">
                  {s.title === "About me" ? (
                    <p className="font-inter font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1] pl-4">
                      {about}
                    </p>
                  ) : s.title === "Work Experience" ? (
                    <div className="flex flex-col gap-4">
                      {workExperience.map((work, index) => (
                        <div key={index} className="flex items-start gap-1">
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col gap-1 min-w-0">
                                <p className="text-[10px] font-bold text-black truncate">{work.title}</p>
                                <p className="text-[10px] text-gray-600 truncate">{work.company}</p>
                                <p className="text-[10px] text-gray-600 truncate">{work.location}</p>
                              </div>
                              <div className="text-[10px] text-gray-600 ml-2 shrink-0">
                                {work.startDate} - {work.current ? 'Present' : work.endDate}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : s.title === "Education" ? (
                    <div className="flex flex-col gap-4">
                      {education.map((edu, index) => (
                        <div key={index} className="flex items-start gap-1">
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col gap-1 min-w-0">
                                <p className="text-[10px] font-bold text-black truncate">{edu.institution}</p>
                                <p className="text-[10px] text-gray-600 truncate">{edu.degree} - {edu.field}</p>
                              </div>
                              <div className="text-[10px] text-gray-600 ml-2 shrink-0">{edu.year}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : s.title === "Areas of expertise" ? (
                    <div className="font-inter font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1] pl-4">
                      {expertise.map((exp, index) => (
                        <div key={index} className="mb-2">
                          <p className="font-bold">{exp.skill}</p>
                          <p>{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : s.title === "Language" ? (
                    <div className="flex flex-col gap-4">
                      {languages.map((lang, index) => (
                        <div key={index} className="flex items-start gap-1">
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold text-[10px] text-black">{lang.name}</p>
                            <p className="text-[10px] text-gray-600">{lang.level}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">&nbsp;</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightPanel;