import Template1 from "../assets/cv-template-01.svg?react";
import Template2 from "../assets/cv-template-02.svg?react";
import Template3 from "../assets/cv-template-03.svg?react";

export default function Templates() {
  return (
    <div className="p-5">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        Select Template Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Template Card 1 */}
        <div className="flex flex-col items-center justify-center border border-gray-100 rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4]">
          <Template1 className="w-[100%] h-[100%] p-2" />
        </div>

        {/* Template Card 2 */}
        <div className="flex flex-col items-center justify-center border border-gray-100 rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4]">
          <Template2 className="w-[100%] h-[100%] p-2" />
        </div>

        {/* Template Card 3 */}
        <div className="flex flex-col items-center justify-center border border-gray-100 rounded shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/4]">
          <Template3 className="w-[100%] h-[100%] p-2" />
        </div>
      </div>
    </div>
  );
}
