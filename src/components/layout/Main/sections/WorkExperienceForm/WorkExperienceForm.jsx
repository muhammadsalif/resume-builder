import { useState } from "react";
import nextIconGray from "../../../../../assets/next.svg";
import nextIconWhite from "../../../../../assets/nextwhite.svg";

const emptyWork = () => ({
  jobTitle: "",
  designation: "",
  company: "",
  from: "",
  to: "",
  onwards: false,
});

export default function WorkExperienceForm() {
  const [items, setItems] = useState([emptyWork()]);

  const update = (idx, key, value) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));
  };

  const add = () => setItems((prev) => [...prev, emptyWork()]);
  const remove = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));

  const isEntryValid = (it) => {
    if (!it.jobTitle || !it.designation || !it.company || !it.from) return false;
    if (!it.onwards && !it.to) return false;
    return true;
  };

  const isValid = items.length > 0 && items.every(isEntryValid);

  const onNext = (e) => {
    e.preventDefault();
    alert("Next Step (UI placeholder)");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">Work experience</h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      <form onSubmit={onNext} className="space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Job title <span className="text-red-500">*</span></label>
                <input
                  value={it.jobTitle}
                  onChange={(e) => update(idx, 'jobTitle', e.target.value)}
                  placeholder="UI/UX Designer"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Designation <span className="text-red-500">*</span></label>
                <input
                  value={it.designation}
                  onChange={(e) => update(idx, 'designation', e.target.value)}
                  placeholder="Associate manager"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-1">Company name <span className="text-red-500">*</span></label>
                <input
                  value={it.company}
                  onChange={(e) => update(idx, 'company', e.target.value)}
                  placeholder="Acme Tech"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-1">From <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={it.from}
                    onChange={(e) => update(idx, 'from', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-1">To <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={it.to}
                    onChange={(e) => update(idx, 'to', e.target.value)}
                    disabled={it.onwards}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id={`onwards-${idx}`}
                    type="checkbox"
                    checked={it.onwards}
                    onChange={(e) => update(idx, 'onwards', e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor={`onwards-${idx}`} className="text-sm text-gray-700">Onwards</label>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                {items.length > 1 && (
                  <button type="button" onClick={() => remove(idx)} className="text-sm text-red-500">Delete</button>
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
