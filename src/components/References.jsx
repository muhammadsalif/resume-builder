import Dot from "./Dot";
import ReferencesIcon from "../assets/references.svg?react";

export default function References() {
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
          <ReferencesIcon className="w-3.5 h-3.5 text-black" />
        </div>

        {/* Heading */}
        <h3 className="text-sm sm:text-base font-bold text-white font-inter">References</h3>
      </div>

      {/* Sub-items */}
      <div className="flex flex-col gap-4 mt-1">
        {/* reference 1 */}
        <div className="flex items-center gap-1">
          <Dot className="mr-1 w-[6px] h-[6px]" />
          <div>
            {/* name */}
            <p className="text-[5px] sm:text-[12px] text-white font-inter">Darwin B. Magana</p>
            {/* designation */}
            <p className="text-[5px] sm:text-[12px] text-black font-inter">(Manager)</p>
          </div>
        </div>

        {/* reference 2 */}
        <div className="flex items-center gap-1">
          <Dot className="mr-1 w-[6px] h-[6px]" />
          <div className="w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75" />
            </svg>
          </div>
          <p className="text-[5px] sm:text-[12px] text-white font-inter">bobbrains@gmail.com</p>
        </div>

      </div>
    </div>
  );
}
