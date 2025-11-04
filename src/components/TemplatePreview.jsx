import avatarPlaceholder from "../assets/avatarbg.svg";
import ContactMeIcon from "../assets/contactme.svg?react";
import ReferencesResume from "../assets/referencesresume.svg?react";
import SocialLinkIcon from "../assets/sociallink.svg?react";
import DottedDivider from "../components/DottedDivider";
import ContactMe from "../components/ContactMe";
import References from "../components/References";
import SocialLink from "../components/SocialLink";
import "./templatePreview.css";

export default function TemplatePreview() {
  const sections = [
    { title: "About me" },
    { title: "Work Experience" },
    { title: "Education" },
    { title: "Areas of expertise" },
    { title: "Language" },
  ];

  const items = [
    { label: "Contact Me", icon: <ContactMeIcon className="w-3 h-3" /> },
    { label: "References", icon: <ReferencesResume className="w-3 h-3" /> },
    { label: "Social link", icon: <SocialLinkIcon className="w-3 h-3" /> },
  ];

  return (
    <div className="flex justify-center p-3">
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 shadow-lg bg-white overflow-hidden"
        style={{
          // width: "363.512px",
          // height: "510px",
          borderRadius: "8px",
        }}
      >
        {/* ===== LEFT PANEL ===== */}
        <div className="template-column relative overflow-hidden bg-transparent">
          {/* Background layers */}
          {/* <img src={blackShape} alt="" className="bg-blackshape" /> */}
          {/* <img src={orangeShape} alt="" className="bg-orangeshape" /> */}

          {/* Left rail content */}
          <div className="bg-black relative z-30 flex flex-col items-start text-white h-full md:pl-4 md:pt-8 md:pb-4">
            {/* Avatar */}
            <div className="avatar-wrap mb-6">
              <div className="avatar-circle">
                <img
                  src={avatarPlaceholder}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* <div className="timeline-line" /> */}

              <div className="space-y-1">
                {items.map((item, i) => (
                  <div key={i} className="rail-item flex flex-col gap-1 relative">
                    {/* Orange stretched dot for each section */}
                    {/* <div className="flex items-center gap-1">
                      <div className="w-1 h-6 bg-orange-500 rounded-full flex-shrink-0" />
                      <h3 className="text-[10px] font-bold leading-[100%] text-white font-inter">
                        {item.label}
                      </h3>
                    </div> */}

                    {/* Contact Me Fields */}
                    {
                      item.label === "Contact Me" ? <ContactMe /> :
                        item.label === "References" ? <References /> :
                          <SocialLink />
                    }
                    {(i != items.length - 1) && <DottedDivider />}
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

        {/* ===== RIGHT PANEL ===== */}
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

      </div>
    </div>
  );
}
