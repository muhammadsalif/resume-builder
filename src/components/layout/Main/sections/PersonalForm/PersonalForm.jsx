// src/features/personal/PersonalForm.jsx
import React from "react";
import { useState } from "react";

const PersonalForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    indeed: "",
    behance: "",
    website: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      indeed: "",
      behance: "",
      website: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex-1">
      <h2 className="text-xl font-semibold mb-4">Personal Info</h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <label
            htmlFor="photo"
            className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl p-4 w-40 cursor-pointer hover:bg-gray-50"
          >
            <div className="text-gray-600 text-sm">Upload your photo</div>
            <input type="file" id="photo" className="hidden" />
          </label>
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100"
          >
            Reset
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full name *" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title *" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email address *" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number *" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
        </div>

        <input name="address" value={form.address} onChange={handleChange} placeholder="Address *" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none" />

        <div className="grid grid-cols-2 gap-4">
          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn URL (optional)" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="indeed" value={form.indeed} onChange={handleChange} placeholder="Indeed URL (optional)" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="behance" value={form.behance} onChange={handleChange} placeholder="Behance URL (optional)" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
          <input name="website" value={form.website} onChange={handleChange} placeholder="Website URL (optional)" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#00318B] focus:outline-none w-full" />
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
