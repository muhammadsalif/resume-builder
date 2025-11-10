import { Dot } from "../../../common";
import { useResumeStore } from "../../../../store/resumeStore";

function RightPanel() {
  const personalInfo = useResumeStore((state) => state.personalInfo);
  const areasOfExpertiseDescription = useResumeStore((state) => state.areasOfExpertiseDescription);
  const about = useResumeStore((state) => state.about);
  const workExperience = useResumeStore((state) => state.workExperience);

  const sections = [
    { title: "About me" },
    { title: "Work Experience" },
    { title: "Education" },
    { title: "Areas of expertise" },
    { title: "Language" },
  ];

  return (
    <div className="relative overflow-hidden bg-transparent">
      <style>
        {`
          .clamp-3-lines {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            min-height: calc(1em * 3); /* Reserve space for up to 3 lines */
            line-height: 1em; /* Make the height calculation accurate */
          }
        `}
      </style>
      {/* Right rail content */}
      <div className="bg-white relative z-30 flex flex-col items-start text-black h-full md:pl-4 md:pt-8 md:pb-4">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col items-start">
            <h3 className="text-[18px] sm:text-[24px] font-bold text-black leading-tight">
              {personalInfo.fullName || "Full Name"}
            </h3>
            <p className="text-[10px] sm:text-[14px] text-gray-600 mt-1">
              {personalInfo.title || "Your Title"}
            </p>
          </div>
        </div>

        {/* Timeline / Sections */}
        <div className="relative w-full">
          <div className="space-y-1">
            {sections.map((s, i) => (
              <div key={i} className="flex flex-col gap-1 relative">
                {/* Orange stretched dot + Title */}
                <div className="flex items-center gap-1">
                  <Dot className="w-1 h-6 flex-shrink-0" />
                  <h3 className="text-[10px] font-bold leading-[100%] text-black">
                    {s.title}
                  </h3>
                </div>

                {/* Section Content */}
                <div className="relative flex flex-col gap-4 my-3 pr-3 w-[190px]">
                  {s.title === "About me" ? (
                    <p className={`clamp-3-lines font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1] pl-4
                    ${about ? "" : "invisible"}  
                    `}>{about}</p>
                  ) : s.title === "Work Experience" ? (
                    <div className="flex flex-col gap-4">
                      {workExperience.length > 0 ? workExperience.map((work, i) => (
                        <div key={i} className="flex items-start gap-1">
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col gap-1 min-w-0">
                                <p className="text-[10px] font-bold text-black truncate">{work.jobTitle}</p>
                                <p className="text-[10px] text-gray-600 truncate">{work.company}</p>
                                <p className="text-[10px] text-gray-600 truncate">{work.designation}</p>
                              </div>
                              <div className="text-[10px] text-gray-600 ml-2 shrink-0">
                                {work.from && new Date(work.from).toLocaleDateString('en-US', { 
                                  month: '2-digit',
                                  day: '2-digit', 
                                  year: 'numeric'
                                })}
                                {" - "}
                                {work.onwards ? "Present" : work.to && new Date(work.to).toLocaleDateString('en-US', {
                                  month: '2-digit',
                                  day: '2-digit',
                                  year: 'numeric'
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : (
                        <div className="flex items-start gap-1">
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex-1 invisible">
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col gap-1 min-w-0">
                                <p className="text-[10px] font-bold text-black truncate">Placeholder</p>
                              </div>
                            </div>
                          </div>
                          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                          <div className="flex-1 invisible">
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col gap-1 min-w-0">
                                <p className="text-[10px] font-bold text-black truncate">Placeholder</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : s.title === "Education" ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col gap-1 min-w-0">
                              <p className="text-[10px] font-bold text-black truncate">Oxford university</p>
                              <p className="text-[10px] text-gray-600 truncate">Masters - Computer science</p>
                            </div>
                            <div className="text-[10px] text-gray-600 ml-2 shrink-0">2021</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col gap-1 min-w-0">
                              <p className="text-[10px] font-bold text-black truncate">Oxford university</p>
                              <p className="text-[10px] text-gray-600 truncate">PHD - Computer science</p>
                            </div>
                            <div className="text-[10px] text-gray-600 ml-2 shrink-0">2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : s.title === "Areas of expertise" ? (
                    <p className="clamp-3-lines font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1] pl-4">{areasOfExpertiseDescription}</p>
                  ) : s.title === "Language" ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-col gap-1">
                          <p className="font-bold text-[10px] text-black">English</p>
                          <p className="text-[10px] text-gray-600">Fluent</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-col gap-1">
                          <p className="font-bold text-[10px] text-black">Spanish</p>
                          <p className="text-[10px] text-gray-600">Excellent</p>
                        </div>
                      </div>
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