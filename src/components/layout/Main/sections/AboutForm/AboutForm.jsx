import { useResumeStore } from "../../../../../store/resumeStore";
import nextIconGray from "../../../../../assets/next.svg";
import deleteIcon from "../../../../../assets/delete.svg";
import nextIconWhite from "../../../../../assets/nextwhite.svg";

export default function AboutForm() {
  const about = useResumeStore((state) => state.about);
  const setAbout = useResumeStore((state) => state.setAbout);

  const onChange = (e) => setAbout(e.target.value);

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  const isValid = about && about.trim().length > 0;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">About me</h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      {/* Editor Card */}
      <form onSubmit={onNext} className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50/80">
            <div className="text-sm font-medium text-gray-700">Write Description</div>
            {/* toolbar (visual only) */}
            <div className="flex items-center gap-2 mt-2.5">
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">B</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">I</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">U</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">•</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">1.</button>
            </div>
          </div>

          <div className="p-4 relative">
            <textarea
              value={about}
              onChange={onChange}
              rows={8}
              className="w-full max-w-full resize-none text-sm text-gray-700 placeholder-gray-400 focus:outline-none min-h-[160px] break-words overflow-auto"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex justify-start items-center px-4 py-2 border-t border-gray-200">
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              onClick={() => setAbout("")}
            >
              <img
                src={deleteIcon}
                alt="delete"
                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div>
            <button
              type="submit"
              disabled={!isValid}
              className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none ${isValid
                ? "bg-[#00318B] text-white hover:bg-blue-900 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Next
              <img
                src={isValid ? nextIconWhite : nextIconGray}
                alt="Next"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
