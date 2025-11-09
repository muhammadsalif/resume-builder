import avatarBackground from "../../../../assets/avatarbg.svg";
import ContactMeIcon from "../../../../assets/contactme.svg?react";
import ReferencesResume from "../../../../assets/referencesresume.svg?react";
import SocialLinkIcon from "../../../../assets/sociallink.svg?react";
import blackShape from "../../../../assets/blackshape.svg";
import orangeShape from "../../../../assets/orangeshape.svg";
import { DottedDivider } from "../../../common";
import ContactMe from "./ContactMe";
import References from "./References";
import SocialLink from "./SocialLink";
import { useResumeStore } from "../../../../store/resumeStore";

const LeftPanel = () => {
  const items = [
    { label: "Contact Me", icon: <ContactMeIcon className="w-3 h-3" /> },
    { label: "References", icon: <ReferencesResume className="w-3 h-3" /> },
    { label: "Social link", icon: <SocialLinkIcon className="w-3 h-3" /> },
  ];
  const { personalInfo } = useResumeStore();

  return (
    <div className="relative overflow-hidden bg-transparent min-h-screen">
      {/* Background layers */}
      <img src={blackShape} alt="" className="absolute inset-0 w-full h-full object-cover z-10" />
      <img src={orangeShape} alt="" className="absolute top-0 right-0 w-full md:w-auto h-auto z-20" />

      {/* Left rail content */}
      <div className="relative z-30 flex flex-col items-center text-white h-full w-full pt-8 pb-4">
        {/* Avatar */}
        <div className="mb-8 w-full flex justify-center items-center relative">
          <div className="relative aspect-square w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full rounded-bl-none"></div>
            {personalInfo.photo ? (
              <img
                src={personalInfo.photo}
                alt="user-avatar"
                className="w-full h-full object-cover rounded-full rounded-bl-none border-4 border-white shadow-lg z-[2]"
              />
            ) : (
              <img
                src={avatarBackground}
                alt="avatar-frame"
                className="w-full h-full object-contain z-[1] pointer-events-none"
              />
            )}
          </div>
        </div>
        {/* <div className="mb-8 w-full flex justify-center items-center relative">
          <div className="relative aspect-square w-[30%] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full rounded-bl-none"></div>
            {personalInfo.photo ? (
              <img
                src={personalInfo.photo}
                alt="user-avatar"
                className="w-full h-full object-cover rounded-full rounded-bl-none border-4 border-white shadow-lg z-[2]"
              />
            ) : (
              <img
                src={avatarBackground}
                alt="avatar-frame"
                className="w-full h-full object-contain z-[1] pointer-events-none"
              />
            )}
          </div>
        </div> */}

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[2px] sm:left-[2px] md:left-[2px] top-0 bottom-0 w-[1.5px] sm:w-[2px] bg-white/30 z-[1]" />
          <div className="relative z-[2] space-y-1">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 relative">

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
  )
}


export default LeftPanel;