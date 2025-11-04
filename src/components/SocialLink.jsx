import Dot from "./Dot";
import SocialLinkIcon from "../assets/sociallink.svg?react";

export default function SocialLink() {
  return (
    <div className="relative flex flex-col gap-4">
      {/* Vertical rail line */}
      {/* <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-500" /> */}

      {/* References Header */}
      <div className="flex items-center gap-1 relative z-10">
        {/* Orange stretched bar */}
        <Dot className="mr-1 w-[6px] h-5" />

        {/* White circular icon */}
        <div className="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center">
          <SocialLinkIcon className="w-3.5 h-3.5 text-black" />
        </div>

        {/* Heading */}
        <h3 className="text-sm sm:text-base font-bold text-white font-inter">Social link</h3>
      </div>

      {/* Sub-items */}
      <div className="flex flex-col gap-4 mt-1">
        {/* linkedin */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* web */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">LinkedIn URL</p>
            </div>

            {/* url */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">www.linkedin.com/in/bobbrains</p>
            </div>
          </div>
        </div>

        {/* indeed */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* web */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">Indeed URL</p>
            </div>

            {/* url */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">www.indeed.com/in/bobbrains</p>
            </div>
          </div>
        </div>

        {/* behance */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* web */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">Behance URL</p>
            </div>

            {/* url */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">www.behance.com/in/bobbrains</p>
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* web */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">Website URL</p>
            </div>

            {/* url */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">www.bobbrains.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
