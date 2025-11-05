import { useState } from "react";
import nextIconGray from "../../../../../assets/next.svg";
import nextIconWhite from "../../../../../assets/nextwhite.svg";

export default function AboutForm() {
  const [description, setDescription] = useState(
    "Creative and detail-oriented product designer passionate about crafting user-centered digital experiences that blend functionality with aesthetics."
  );

  const onChange = (e) => setDescription(e.target.value);

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  const isValid = description && description.trim().length > 0;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">About me</h2>
          <p className="text-sm text-gray-500">Write a short description for your profile</p>
        </div>
      </div>

      {/* Editor Card */}
      <form onSubmit={onNext} className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
            <div className="text-sm text-gray-600">Write Description</div>
            {/* toolbar (visual only) */}
            <div className="flex items-center gap-2 mt-2">
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-200 rounded">B</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-200 rounded">I</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-200 rounded">U</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-200 rounded">•</button>
              <button type="button" className="px-2 py-1 text-sm font-medium border border-gray-200 rounded">1.</button>
            </div>
          </div>

          <div className="p-4">
            <textarea
              value={description}
              onChange={onChange}
              rows={8}
              className="w-full resize-none text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-transparent focus:outline-none"
            />
          </div>

          <div className="px-4 py-3 border-t border-gray-100 bg-white rounded-b-lg">
            <div className="flex justify-between items-center">
              <div />
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
          </div>
        </div>
      </form>
    </div>
  );
}
// import React from "react";
// import { useResumeStore } from "../../store/resumeStore";

// export default function AboutForm() {
//   const { about, setAbout } = useResumeStore((state) => ({
//     about: state.about,
//     setAbout: state.setAbout,
//   }));

//   return (
//     <div className="form-section">
//       <h2>About</h2>
//       <textarea
//         placeholder="Write a short summary about yourself..."
//         value={about}
//         onChange={(e) => setAbout(e.target.value)}
//         rows={6}
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: "6px",
//           border: "1px solid #ccc",
//         }}
//       />
//     </div>
//   );
// }
