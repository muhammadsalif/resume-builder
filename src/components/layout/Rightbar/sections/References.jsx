import { Dot } from "../../../common";
import ReferencesIcon from "../../../../assets/references.svg?react";
import { useResumeStore } from "../../../../store/resumeStore";

export default function References() {
  const references = useResumeStore((state) => state.references);
  const formattedReferences =
    references && references.length > 0
      ? references.slice(0, 2)
      : [{}, {}]; 
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
        <h3 className="text-sm sm:text-base font-bold text-white">References</h3>
      </div>

      {/* Sub-items */}
      <div className="flex flex-col gap-4 mt-1">
        {formattedReferences.slice(0, 2).map((ref, index) => (
          <div key={index} className="flex items-start gap-1">
            <Dot className="mt-[2px] mr-1 w-[6px] h-[6px] text-orange-500" />

            <div className="flex flex-col gap-1">

              {/* name + designation */}
              <div className="flex gap-1">
                <p className={`text-[5px] sm:text-[10px] text-white ${ref.name ? "" : "invisible"}`}>{ref.name}</p>
                <p className={`text-[5px] sm:text-[10px] text-[#A1A1A1] ${ref.designation ? "" : "invisible"}`}>({ref.designation})</p>
              </div>

              {/* phone number */}
              <div className={`flex gap-1 ${ref.phone ? "" : "invisible"}`}>
                <p className="text-[5px] sm:text-[10px] text-[#A1A1A1]">Phone:</p>
                <p className="text-[5px] sm:text-[10px] text-white">{ref.phone}</p>
              </div>

              {/* email */}
              <div className={`flex gap-1 ${ref.phone ? "" : "invisible"}`}>
                <p className="text-[5px] sm:text-[10px] text-[#A1A1A1]">Email:</p>
                <p className="text-[5px] sm:text-[10px] text-white">{ref.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
