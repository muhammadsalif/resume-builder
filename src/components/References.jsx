import Dot from "./Dot";
import ContactMeIcon from "../assets/contactme.svg?react";

export default function References() {
  return (
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
  );
}
