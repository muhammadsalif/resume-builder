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
                  <div className="w-1 h-6 bg-orange-500 rounded-full flex-shrink-0" />
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