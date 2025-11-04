import React from "react"
// import blackShape from "../assets/blackshape.svg";
import orangeShape from "../assets/orangeshape.svg";
import avatarPlaceholder from "../assets/avatarbg.svg";

import ContactMeIcon from "../assets/contactme.svg?react";
import ReferencesResume from "../assets/referencesresume.svg?react";
import SocialLinkIcon from "../assets/sociallink.svg?react";
import DottedDivider from "../components/DottedDivider";
import ContactMe from "../components/ContactMe";
import References from "../components/References";
import SocialLink from "../components/SocialLink";

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
          <div className="bg-black relative z-30 flex flex-col items-start text-white h-full md:pl-4 md:pt-8">
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
