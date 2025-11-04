import Dot from "./Dot";
import ReferencesIcon from "../assets/references.svg?react";
import { useResumeStore } from "../store/resumeStore";

export default function References() {
  const references = useResumeStore((state) => state.references);

  return (
    <div className="relative flex flex-col gap-4">
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
        {references.map((reference, index) => (
          <div key={index} className="flex items-start gap-1">
            <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-white">{reference.name}</p>
                <p className="text-sm text-gray-400">({reference.title})</p>
              </div>
              <p className="text-sm text-gray-300">{reference.company}</p>
              <p className="text-sm text-gray-300">{reference.email}</p>
              <p className="text-sm text-gray-300">{reference.phone}</p>
            </div>
          </div>
        ))}
        {/* reference 1 */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* name + designation */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">Darwin B. Magana</p>
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">(Manager)</p>
            </div>

            {/* phone number */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">Phone:</p>
              <p className="text-[5px] sm:text-[10px] text-white font-inter">+1 234 567 8901</p>
            </div>

            {/* email */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">Email:</p>
              <p className="text-[5px] sm:text-[10px] text-white font-inter">darwin.magana@example.com</p>
            </div>
          </div>
        </div>

        {/* reference 2 */}
        <div className="flex items-start gap-1">
          <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />
          <div className="flex flex-col gap-1">
            {/* name + designation */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-white font-inter">Robert J. Belvin</p>
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">(Manager)</p>
            </div>

            {/* phone number */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">Phone:</p>
              <p className="text-[5px] sm:text-[10px] text-white font-inter">+1 234 567 8901</p>
            </div>

            {/* email */}
            <div className="flex gap-1">
              <p className="text-[5px] sm:text-[10px] text-[#A1A1A1] font-inter">Email:</p>
              <p className="text-[5px] sm:text-[10px] text-white font-inter">darwin.magana@example.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
