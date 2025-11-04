import Dot from "./Dot";

const RightPanel = () => {
  const sections = [
    { title: "About me" },
    { title: "Work Experience" },
    { title: "Education" },
    { title: "Areas of expertise" },
    { title: "Language" },
  ];

  return (
    <div className="template-column relative overflow-hidden bg-transparent">
      {/* Right rail content */}
      <div className="bg-white relative z-30 flex flex-col items-start text-black h-full md:pl-4 md:pt-8 md:pb-4">
        {/* Header Section */}
        <div className="avatar-wrap mb-6">
          <div className="flex flex-col items-start">
            <h3 className="text-[18px] sm:text-[24px] font-bold text-black font-inter leading-tight">
              Bob Brains
            </h3>
            <p className="text-[10px] sm:text-[14px] text-gray-600 font-inter mt-1">
              UI/UX Designer
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
                <div className="ml-[10px] w-[190px] opacity-100">
                  {s.title === "About me" ? (
                    <p className="font-inter font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1]">
                      Creative and detail-oriented product designer passionate about crafting user-centered digital experiences that blend functionality with aesthetics.
                    </p>
                  ) : s.title === "Work Experience" ? (
                    <div className="space-y-3">
                      {/* First work item */}
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-1 justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-black">UI/UX Designer</p>
                            <p className="text-[10px] text-gray-600">Manager</p>
                            <p className="text-[10px] text-gray-600">Associate manager</p>
                          </div>
                          <div className="text-[10px] text-gray-600">12/10/2018 - 12/10/2020</div>
                        </div>
                      </div>

                      {/* Second work item */}
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-1 justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-black">Graphic Designer</p>
                            <p className="text-[10px] text-gray-600">Creative Market / Chicago</p>
                            <p className="text-[10px] text-gray-600">Manager</p>
                          </div>
                          <div className="text-[10px] text-gray-600">12/10/2020 - 12/10/2024</div>
                        </div>
                      </div>
                    </div>
                  ) : s.title === "Education" ? (
                    <div className="space-y-3">
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-1 justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-black">Oxford university</p>
                            <p className="text-[10px] text-gray-600">Masters - Computer science</p>
                          </div>
                          <div className="text-[10px] text-gray-600">2021</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div className="flex flex-1 justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-black">Oxford university</p>
                            <p className="text-[10px] text-gray-600">PHD - Computer science</p>
                          </div>
                          <div className="text-[10px] text-gray-600">2023</div>
                        </div>
                      </div>
                    </div>
                  ) : s.title === "Areas of expertise" ? (
                    <p className="font-inter font-normal not-italic text-[10px] tracking-[0%] text-[#A1A1A1]">
                      Expert in crafting user-centered digital experiences that combine aesthetics with functionality. Skilled in UX/UI design, prototyping, and design strategy to deliver impactful and seamless products.
                    </p>
                  ) : s.title === "Language" ? (
                    <div className="text-[10px] text-gray-700 space-y-3">
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div>
                          <p className="font-bold text-[10px]">English</p>
                          <p className="text-[10px] text-gray-600">Fluent</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-1">
                        <Dot className="mt-[2px] mr-1 w-[6px] h-[6px]" />
                        <div>
                          <p className="font-bold text-[10px]">Spanish</p>
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