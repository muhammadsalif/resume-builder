import { useState } from "react";
import nextIconGray from "../../../../../assets/next.svg";
import nextIconWhite from "../../../../../assets/nextwhite.svg";

const emptyRef = () => ({ name: "", title: "", email: "", phone: "" });

export default function ReferencesForm() {
  const [items, setItems] = useState([emptyRef()]);

  const update = (idx, key, value) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));
  };

  const add = () => setItems((prev) => [...prev, emptyRef()]);
  const remove = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));

  const isValid = items.length > 0 && items.every((it) => it.name && it.title && it.email && it.phone);

  const onSave = (e) => {
    e.preventDefault();
    alert("Save (UI placeholder)");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 mb-6 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">References</h2>
          <p className="text-sm text-gray-500">Fill details here</p>
        </div>
      </div>

      <form onSubmit={onSave} className="space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Person name <span className="text-red-500">*</span></label>
                <input
                  value={it.name}
                  onChange={(e) => update(idx, 'name', e.target.value)}
                  placeholder="John Michel"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                <input
                  value={it.title}
                  onChange={(e) => update(idx, 'title', e.target.value)}
                  placeholder="Manager"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={it.email}
                  onChange={(e) => update(idx, 'email', e.target.value)}
                  placeholder="john.michel@acme.com"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                <input
                  value={it.phone}
                  onChange={(e) => update(idx, 'phone', e.target.value)}
                  placeholder="+92 5485545485"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none"
                />
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
            Save
            <img src={isValid ? nextIconWhite : nextIconGray} alt="Save" className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
