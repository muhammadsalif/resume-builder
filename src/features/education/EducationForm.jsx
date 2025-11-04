import { useState } from "react";
import nextIconGray from "../../assets/next.svg";
import nextIconWhite from "../../assets/nextwhite.svg";

const emptyEducation = () => ({
  level: "",
  field: "",
  institution: "",
  year: "",
});

export default function EducationForm() {
  const [items, setItems] = useState([emptyEducation()]);

  const update = (idx, key, value) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));
  };

  const add = () => setItems((prev) => [...prev, emptyEducation()]);
  const remove = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  const isValid = items.length > 0 && items.every((it) => it.level && it.field && it.institution && it.year);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">Education</h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      <form onSubmit={onNext} className="space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Level of education <span className="text-red-500">*</span></label>
                <input
                  value={it.level}
                  onChange={(e) => update(idx, 'level', e.target.value)}
                  placeholder="e.g Masters"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Field of study <span className="text-red-500">*</span></label>
                <input
                  value={it.field}
                  onChange={(e) => update(idx, 'field', e.target.value)}
                  placeholder="e.g Computer science"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">University / Collage / School <span className="text-red-500">*</span></label>
                <input
                  value={it.institution}
                  onChange={(e) => update(idx, 'institution', e.target.value)}
                  placeholder="e.g Oxford university"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Passing Year <span className="text-red-500">*</span></label>
                <select
                  value={it.year}
                  onChange={(e) => update(idx, 'year', e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 50 }).map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={String(year)}>{year}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                {items.length > 1 && (
                  <button type="button" onClick={() => remove(idx)} className="text-sm text-red-500">Remove</button>
                )}
              </div>
              <div>
                {idx === items.length - 1 && (
                  <button type="button" onClick={add} className="text-sm text-blue-600">+ Add more</button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none ${isValid
              ? "bg-[#00318B] text-white hover:bg-blue-900 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Next
            <img src={isValid ? nextIconWhite : nextIconGray} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
