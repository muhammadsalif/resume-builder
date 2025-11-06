import avatarBackground from "../../../../assets/avatarbg.svg";
import userPic from "../../../../assets/avatar.png";

import ContactMeIcon from "../../../../assets/contactme.svg?react";
import ReferencesResume from "../../../../assets/referencesresume.svg?react";
import SocialLinkIcon from "../../../../assets/sociallink.svg?react";
import blackShape from "../../../../assets/blackshape.svg";
import orangeShape from "../../../../assets/orangeshape.svg";
import { DottedDivider } from "../../../common";
import ContactMe from "./ContactMe";
import References from "./References";
import SocialLink from "./SocialLink";

const LeftPanel = () => {
  const items = [
    { label: "Contact Me", icon: <ContactMeIcon className="w-3 h-3" /> },
    { label: "References", icon: <ReferencesResume className="w-3 h-3" /> },
    { label: "Social link", icon: <SocialLinkIcon className="w-3 h-3" /> },
  ];
  return (
    <div className="relative overflow-hidden bg-transparent">
      {/* Background layers */}
      <img src={blackShape} alt="" className="absolute inset-0 w-full h-full object-cover z-10" />
      <img src={orangeShape} alt="" className="absolute top-0 right-0 w-auto h-auto z-20" />

      {/* Left rail content */}
      <div className="relative z-30 flex flex-col items-start text-white h-full md:pl-4 md:pt-8 md:pb-4">
        {/* Avatar */}
        <div className="mb-6 flex justify-center">
          <div className="relative aspect-square w-24 sm:w-32 md:w-36 mx-auto">

            {/* Background Image / Frame */}
            <img
              src={avatarBackground}
              alt="avatar-frame"
              className="absolute inset-0 w-full h-full object-contain z-[1] pointer-events-none"
            />

            {/* User Image */}
            <img
              src={userPic}
              alt="user-avatar"
              className="absolute inset-0 w-full h-full object-cover rounded-full z-[2]"
            />
          </div>
        </div>


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