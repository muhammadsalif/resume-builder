import avatarPlaceholder from "../../../../assets/avatarbg.svg";
import ContactMeIcon from "../../../../assets/contactme.svg?react";
import ReferencesResume from "../../../../assets/referencesresume.svg?react";
import SocialLinkIcon from "../../../../assets/sociallink.svg?react";
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
      {/* <img src={blackShape} alt="" className="bg-blackshape" /> */}
      {/* <img src={orangeShape} alt="" className="bg-orangeshape" /> */}

      {/* Left rail content */}
      <div className="bg-black relative z-30 flex flex-col items-start text-white h-full md:pl-4 md:pt-8 md:pb-4">
        {/* Avatar */}
        <div className="mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={avatarPlaceholder}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* <div className="timeline-line" /> */}

          <div className="space-y-1">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 relative">
                {/* Orange stretched dot for each section */}
                {/* <div className="flex items-center gap-1">
                      <div className="w-1 h-6 bg-orange-500 rounded-full flex-shrink-0" />
                      <h3 className="text-[10px] font-bold leading-[100%] text-white">
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
  )
}


export default LeftPanel;