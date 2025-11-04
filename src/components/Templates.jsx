import { useState } from "react";
import Template1 from "../assets/cv-template-01.svg?react";
import Template2 from "../assets/cv-template-02.svg?react";
import Template3 from "../assets/cv-template-03.svg?react";

export default function Templates() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-5">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        Select Template Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Template Card 1 */}
        <div
          className={`flex flex-col items-center justify-center rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4] cursor-pointer ${activeIndex === 1
              ? "border-2 border-[rgba(0,49,139,1)]"
              : "border border-gray-200"
            }`}
          onClick={() => setActiveIndex(1)}
        >
          <Template1 className="w-full h-full p-2 object-contain" />
        </div>

        {/* Template Card 2 */}
        <div
          className={`flex flex-col items-center justify-center rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4] cursor-pointer ${activeIndex === 2
              ? "border-2 border-[rgba(0,49,139,1)]"
              : "border border-gray-200"
            }`}
          onClick={() => setActiveIndex(2)}
        >
          <Template2 className="w-full h-full p-2 object-contain" />
        </div>

        {/* Template Card 3 */}
        <div
          className={`flex flex-col items-center justify-center rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4] cursor-pointer ${activeIndex === 3
              ? "border-2 border-[rgba(0,49,139,1)]"
              : "border border-gray-200"
            }`}
          onClick={() => setActiveIndex(3)}
        >
          <Template3 className="w-full h-full p-2 object-contain" />
        </div>
      </div>
    </div>
  );
}
