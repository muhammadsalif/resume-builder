import React from "react";
import blackShape from "../assets/blackshape.svg";
import orangeShape from "../assets/orangeshape.svg";
import rightOrange from "../assets/orangeshape.svg"; // re-use or export a different one if you have a dedicated bottom-right shape
import avatarPlaceholder from "../assets/avatarbg.svg"; // optional, replace with your avatar svg/png

import "./templatePreview.css";

export default function TemplatePreview({ withData = true }) {
  const sections = [
    { title: "About me", icon: "🟠" },
    { title: "Work Experience", icon: "🟠" },
    { title: "Education", icon: "🟠" },
    { title: "Areas of expertise", icon: "🟠" },
    { title: "Language", icon: "🟠" },
  ];

  return (
    <div className="template-wrap min-h-screen p-6 flex justify-center">
      <div className="template-card shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
        {/* LEFT TEMPLATE (without / with data) */}
        <div className="template-column relative overflow-hidden bg-transparent">
          {/* Background shapes layered exactly */}
          <img src={blackShape} alt="" className="bg-blackshape" />
          <img src={orangeShape} alt="" className="bg-orangeshape" />

          {/* Left rail content */}
          <div className="left-rail relative z-30 flex flex-col items-start text-white h-full p-6 md:pl-8 md:pt-8">
            <div className="avatar-wrap mb-6">
              <div className="avatar-circle">
                {/* if withData true, show avatar image otherwise show placeholder shape */}
                <img src={withData ? avatarPlaceholder : avatarPlaceholder} alt="avatar" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            {/* vertical timeline + items */}
            <div className="rail-items relative">
              {/* Vertical line */}
              <div className="timeline-line" />

              {/* items positioned beside the vertical line */}
              <div className="rail-list ml-8 space-y-8">
                <div className="rail-item flex items-start gap-3">
                  <div className="rail-icon">⦿</div>
                  <div className="rail-text">Contact Me</div>
                </div>

                <div className="rail-item flex items-start gap-3">
                  <div className="rail-icon">⦿</div>
                  <div className="rail-text">References</div>
                </div>

                <div className="rail-item flex items-start gap-3">
                  <div className="rail-icon">⦿</div>
                  <div className="rail-text">Social link</div>
                </div>
              </div>

              {/* orange dots along the timeline (generate many to mimic screenshot) */}
              <div className="timeline-dots">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="timeline-dot" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEMPLATE (sheet) */}
        <div className="sheet-column relative bg-white overflow-hidden">
          {/* bottom-right orange corner shape */}
          <img src={rightOrange} alt="" className="sheet-bottom-corner" />

          <div className="p-6 md:p-10">
            <header className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Bob Brains</h3>
              <p className="text-sm text-gray-600 mt-1">UI/UX Designer</p>
            </header>

            {/* sections */}
            {sections.map((s) => (
              <section key={s.title} className="mb-6">
                <h4 className="flex items-center gap-3 text-gray-800 font-semibold mb-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
                  {s.title}
                </h4>
                <div className="text-sm text-gray-600">
                  {withData ? (
                    <p>
                      {s.title === "About me"
                        ? "Creative and detail-oriented product designer passionate about crafting user-centered digital experiences that blend functionality with aesthetics."
                        : `${s.title} — example content (dates / description).`}
                    </p>
                  ) : (
                    <p className="text-gray-300">--</p>
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
