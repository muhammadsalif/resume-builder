import TemplatePreview from "./sections/TemplatePreview";
import Templates from "./sections/Templates";

const Rightbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 p-5 border-b border-[#DEE0E3]">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
          Select your resumes
        </h2>
        <p className="text-sm text-gray-500">
          Select and fill details individually.
        </p>
      </div>
      <TemplatePreview />
      <Templates />
    </div>
  );
};

export default Rightbar;
