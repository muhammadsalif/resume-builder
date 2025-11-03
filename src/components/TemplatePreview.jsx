import React from "react"
import blackShape from "../assets/blackshape.svg";
import orangeShape from "../assets/orangeshape.svg";
import avatarPlaceholder from "../assets/avatarbg.svg";

import ContactMeIcon from "../assets/contactme.svg?react";
import ReferencesResume from "../assets/referencesresume.svg?react";
import SocialLink from "../assets/sociallink.svg?react";
import DottedDivider from "../components/DottedDivider";
import Dot from "../components/Dot";
import "./templatePreview.css";

export default function TemplatePreview({ withData = true }) {
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
    { label: "Social link", icon: <SocialLink className="w-3 h-3" /> },
  ];

  return (
    <div className="template-wrap flex justify-center p-3">
      <div
        className="template-card relative grid grid-cols-1 md:grid-cols-2 shadow-lg bg-white overflow-hidden"
        style={{
          // width: "363.512px",
          height: "510px",
          borderRadius: "8px",
        }}
      >
        {/* ===== LEFT PANEL ===== */}
        <div className="template-column relative overflow-hidden bg-transparent">
          {/* Background layers */}
          <img src={blackShape} alt="" className="bg-blackshape" />
          <img src={orangeShape} alt="" className="bg-orangeshape" />

          {/* Left rail content */}
          <div className="left-rail relative z-30 flex flex-col items-start text-white h-full md:pl-4 md:pt-8">
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
            <div className="rail-items relative">
              {/* <div className="timeline-line" /> */}

              <div className="rail-list space-y-8">
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
                    {item.label === "Contact Me" && (
                      // Contact Me Section
                      <div className="relative flex flex-col gap-4">
                        {/* Vertical rail line */}
                        {/* <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-500" /> */}

                        {/* Contact Me Header */}
                        <div className="flex items-center gap-1 relative z-10">
                          {/* Orange stretched bar */}
                          <Dot className="mr-1 w-[6px] h-5" />


                          {/* White circular icon */}
                          <div className="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                            <ContactMeIcon className="w-3.5 h-3.5 text-black" />
                          </div>

                          {/* Heading */}
                          <h3 className="text-sm sm:text-base font-bold text-white font-inter">Contact Me</h3>
                        </div>

                        {/* Sub-items */}
                        <div className="flex flex-col gap-4 mt-1">
                          {/* Phone */}
                          <div className="flex items-center gap-1">
                            <Dot className="mr-1 w-[6px] h-[6px]" />
                            <div className="w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a.75.75 0 01.75-.75h2.1a.75.75 0 01.7.48l1.3 3.27a.75.75 0 01-.17.79l-1.45 1.46a12.07 12.07 0 005.66 5.66l1.46-1.45a.75.75 0 01.79-.17l3.27 1.3a.75.75 0 01.48.7v2.1a.75.75 0 01-.75.75h-1.5C9.26 21 3 14.74 3 6.75v0z" />
                              </svg>
                            </div>
                            <p className="text-[5px] sm:text-[12px] text-white font-inter">+92 31 2024889</p>
                          </div>

                          {/* Email */}
                          <div className="flex items-center gap-1">
                            <Dot className="mr-1 w-[6px] h-[6px]" />
                            <div className="w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75" />
                              </svg>
                            </div>
                            <p className="text-[5px] sm:text-[12px] text-white font-inter">bobbrains@gmail.com</p>
                          </div>

                          {/* Address */}
                          <div className="flex items-start gap-1">
                            <Dot className="mr-1 w-[6px] h-[6px]" />
                            <div className="w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.75-6.478-6.75-10.5A6.75 6.75 0 1112 21z" />
                                <circle cx="12" cy="10.5" r="1.5" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="text-[5px] sm:text-[12px] text-white font-inter leading-tight">
                              <p>769 Prudence Street</p>
                              <p>Lincoln Park, MI 48146</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <DottedDivider />
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

        {/* ===== RIGHT PANEL ===== */}
        <div className="sheet-column relative bg-white overflow-hidden">
          <img src={orangeShape} alt="" className="sheet-bottom-corner" />

          <div className="sheet-content relative z-10 p-6 md:p-10">
            <header className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Bob Brains</h3>
              <p className="text-sm text-gray-600 mt-1">UI/UX Designer</p>
            </header>

            {sections.map((s) => (
              <section key={s.title} className="mb-6 min-h-[60px]">
                <h4 className="flex items-center gap-1 text-gray-800 font-semibold mb-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
                  {s.title}
                </h4>

                <div className="text-sm text-gray-600">
                  {withData ? (
                    <p>Actual content here...</p>
                  ) : (
                    <p className="text-gray-300">&nbsp;</p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
